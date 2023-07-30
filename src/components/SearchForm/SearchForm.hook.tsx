import { useEffect } from 'react'
import { pokemonDetailService } from '@/services/pokemonDetail';
import { pokemonListService } from '@/services/pokemonList';
import { useForm } from 'react-hook-form'
//fetch list first
import { usePokemonListStore } from '@/store/pokemonList'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';
import { generationList, sortList, typesList } from '@/util/optionList';

const useSearchForm = () => {
    const {
        register,
        watch,
    } = useForm();
    const generation = watch('generation')
    const sort = watch('sort')
    const types = watch('types')
    const keyword = watch('keyword')
    const { setFetchPokemonList, setPokemonList, fetchPokemon } = usePokemonListStore()

    //Calling Data
    const callData = async ({ limit, offset }: { limit: number, offset: number }) => {
        setFetchPokemonList({
            data: [],
            loading: true,
            error: null
        })
        const responseList = await pokemonListService.getPokemonList(limit, offset)
        //pokeList is the array for handling incoming data
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
                    pokeList.push({
                        ...pokeData,
                        image: pokeData.sprites.other.dream_world.front_default || pokeData.sprites.other['official-artwork'].front_default
                    })
                }
            }
            // image: pokeData?.sprites.other.dream_world.front_default || pokeData?.sprites.other['official-artwork']/
            // console.log('pokelist', pokeList, 'data type', typeof pokeList)
            //real data
            setFetchPokemonList({
                data: pokeList,
                loading: false,
                error: null,
            })
            const data = filterPokemon(pokeList, keyword, types, sort)
            console.log('data from filter', data)

            setPokemonList({
                data: data, //data from above
                loading: false,
                error: null,
            })
            //mock data 
            // console.log('setpokeList', setFetchPokemonList)
        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error,
            })
        }
    }

    const filterPokemon = (
        pokeList: IPokemonDetailResponse[],
        keyword: string,
        type: string = 'all types',
        sort: 'id' | 'name') => {

        console.log("pokeList", pokeList)
        console.log(" keyword", keyword)
        console.log("type", type)
        console.log("sort", sort)

        const filteringKeyword = pokeList.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
        // console.log("filteringKeyword", filteringKeyword)
        const filteringType = type !== 'all types' ? filteringKeyword.filter((item) => item.types.find((item) => item.type.name.toLowerCase().includes(type.toLowerCase()))) : filteringKeyword;
        // console.log('filteringType', filteringType)

        //sort by....
        console.log('sortBy', sortBy(filteringType, sort))
        return sortBy(filteringType, sort)
    }
    const sortBy = (data: IPokemonDetailResponse[], type: 'id' | 'name') => {
        switch (type) {
            case 'id':
                return data.sort((a, b) => a.id - b.id)
            case 'name':
                return data.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            default:
                return data.sort((a, b) => a.id - b.id)
        }
    }
    useEffect(() => {
        // console.log('fetchPokemon.data', fetchPokemon.data);
        if (fetchPokemon.data) {
            const data = filterPokemon(fetchPokemon.data, keyword, typesList[types], sortList[sort])
            // console.log('data from filterPokemon', data)
            setPokemonList({
                data: data, // !!!!!!!!!!!!why data might be undefined!!!!!!!!!!!!!!
                loading: false,
                error: null
            })
        }
        // console.log("KWTS", keyword, typesList[types], sort)
    }, [keyword, types, sort])

    useEffect(() => {
        // console.log(generation)
        if (generation !== undefined) {
            //recieve index
            const data = {
                limit: generationList[generation].limit,
                offset: generationList[generation].offset
            }
            callData(data) //generationList[generation] = change depends on index
        }
    }, [generation])

    //this
    return {
        fieldGeneration: register('generation', {
            value: 0 //default from zustand
        }),
        fieldTypes: register('types'),
        fieldSort: register('sort'),
        fieldKeyword: register('keyword'),
    } //bind with searchForm.tsx
}
export { useSearchForm } //export only compo because it is a hook no need for react functionality