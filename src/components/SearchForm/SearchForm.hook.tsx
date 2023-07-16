import { useEffect } from 'react'
import { pokemonDetailService } from '@/services/pokemonDetail';
import { pokemonListService } from '@/services/pokemonList';
import { useForm } from 'react-hook-form' //import use form
//fetch list first
import { usePokemonListStore } from '@/store/pokemonList'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';

const useSearchForm = () => {
    const {
        register,
        // handleSubmit,
        watch,
    } = useForm();
    const keyword = watch('keyword')
    const { setFetchPokemonList, setPokemonList } = usePokemonListStore()

    const callData = async () => {
        const responseList = await pokemonListService.getPokemonList()
        //pokeList is the array for handling data
        const pokeList: IPokemonDetailResponse[] = []
        setFetchPokemonList({
            data: [],
            loading: true,
            error: null
        })
        // console.log('data', data)
        if (responseList.status === 200) {  //API RESPONSE CODE STATUS
            //list fetched
            //loop data
            const responseResults = responseList.data?.results || []
            for (const pokemon of responseResults) {
                const response = await pokemonDetailService.getPokemonDetail(pokemon.name)
                const pokeData = response.data
                if (pokeData) {
                    pokeList.push({ ...pokeData, image: pokeData?.sprites.other.dream_world.front_default || pokeData?.sprites.other['official-artwork'].front_default })
                }
            }
            // image: pokeData?.sprites.other.dream_world.front_default || pokeData?.sprites.other['official-artwork']/
            console.log(pokeList, 'datatype', typeof pokeList)
            setFetchPokemonList({
                data: pokeList,
                loading: false,
                error: null,
            })
            setPokemonList({
                data: pokeList,
                loading: false,
                error: null,
            })
        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error,
            })
        }
    }
    useEffect(() => {
        callData()
        console.log("watch", keyword)
        // console.log(callData)
    }, [keyword])



    //this
    return {
        fieldKeyword: register('keyword'),
    } //bind with searchForm.tsx
}

export { useSearchForm } //export only compo because it is a hook no need for react functionality