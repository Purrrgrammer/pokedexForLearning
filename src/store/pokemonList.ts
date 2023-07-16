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
    fetchPokemon: { //raw data
        data: [],
        loading: false,
        error: null
    }
}
type pokemonType = {
    data: IPokemonDetailResponse[] //array of fetched data //OLD => IGetPokemonDetailResponse
    loading: boolean
    error: null | any // dont know what will passed
}
//setFetchPokemonList(data) รับค้านีเข้ามา

type UsePokemonListStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType,
    setFetchPokemonList: (value: pokemonType) => void, //raw data
    setPokemonList: (value: pokemonType) => void, //show data
    clearPokemon: () => void,
}

export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
    ...initialStore,
    setFetchPokemonList: (value: pokemonType) => { set({ fetchPokemon: value }) },
    setPokemonList: (value: pokemonType) => { set({ pokemon: value }) }, //require value of pokemonType > set new pokemon with value
    clearPokemon: () => set({ ...initialStore })
}))

