import { useEffect } from 'react'
import { pokemonDetailService } from '@/services/pokemonDetail';
import { pokemonListService } from '@/services/pokemonList';
import { useForm } from 'react-hook-form' //import use form
//fetch list first
import { usePokemonListStore } from '@/store/pokemonList'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';
import { generationList } from '@/util/optionList';

const useSearchForm = () => {
    const {
        register,
        // handleSubmit,
        watch,
    } = useForm();
    const generation = watch('generation')
    const sort = watch('sort')
    const types = watch('types')
    const keyword = watch('keyword')
    const { setFetchPokemonList, setPokemonList, fetchPokemon } = usePokemonListStore()

    //call data
    const callData = async (filter: {
        name: string;
        limit: number;
        offset: number;
    }) => {
        setFetchPokemonList({
            data: [],
            loading: true,
            error: null
        })
        const responseList = await pokemonListService.getPokemonList(filter.limit, filter.offset)
        //pokeList is the array for handling data
        const pokeList: IPokemonDetailResponse[] = []
        // console.log('data', data)
        if (responseList.status === 200) {  //API RESPONSE CODE STATUS
            //list fetched
            //loop data
            const responseResults = responseList.data?.results || []
            for (const pokemon of responseResults) {
                const response = await pokemonDetailService.getPokemonDetail(pokemon.name)
                const pokeData = response.data
                if (pokeData) {
                    pokeList.push({ ...pokeData, image: pokeData.sprites.other.dream_world.front_default || pokeData.sprites.other['official-artwork'].front_default })
                }
            }
            // image: pokeData?.sprites.other.dream_world.front_default || pokeData?.sprites.other['official-artwork']/
            console.log(pokeList, 'data type', typeof pokeList)
            //real data
            setFetchPokemonList({
                data: pokeList,
                loading: false,
                error: null,
            })
            //mock data 
            console.log('setpokeList', pokeList)
        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error,
            })
        }
    }
    /*    setPokemonList({
                data: pokeList,
                loading: false,
                error: null,
            }) */


    useEffect(() => {
        // const data = pokeList.filter((item) => item.name.toLowerCase().includes(keyword?.toLowerCase()))
        // console.log('data from keyword', data)
        // setFetchPokemonList({
        //     data: data,
        //     loading: false,
        //     error: null
        // })
        callData(keyword)
        console.log("keyword", keyword)
        // console.log(callData)
    }, [keyword])

    useEffect(() => {
        console.log(generation)
        if (generation !== undefined) {
            //recieve index
            callData(generationList[generation])
        }
    }, [generation])



    //this
    return {
        fieldGeneration: register('generation'),
        fieldTypes: register('types'),
        fieldSort: register('sort'),
        fieldKeyword: register('keyword'),
    } //bind with searchForm.tsx
}

export { useSearchForm } //export only compo because it is a hook no need for react functionality