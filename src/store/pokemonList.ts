import { create } from 'zustand'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'

//sort and type 
//show data vs raw data(real data)
// fetch data (raw) > search > filter raw

const initialStore = { //first set initial value
    pokemon: { //show data
        data: [],
        loading: false,
        error: null
    },
    fetchPokemon: { //raw data (fetched data)
        data: [],
        loading: false,
        error: null
    }
}
type pokemonType = {
    data: IPokemonDetailResponse[] | undefined //array of fetched data //OLD => IGetPokemonDetailResponse
    loading: boolean
    error: null | any // dont know what will passed
}
//setFetchPokemonList(data) รับค้านีเข้ามา

type UsePokemonListStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType,
    setPokemonList: (value: pokemonType | undefined) => void, //show data
    setFetchPokemonList: (value: pokemonType | undefined) => void, //raw data
    clearPokemon: () => void,
}

export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
    ...initialStore,
    setPokemonList: (value: pokemonType | undefined) => set({ pokemon: value }), //require value of pokemonType > set new pokemon with value
    setFetchPokemonList: (value: pokemonType | undefined) => set({ fetchPokemon: value }),
    clearPokemon: () => set({ ...initialStore })
}))

