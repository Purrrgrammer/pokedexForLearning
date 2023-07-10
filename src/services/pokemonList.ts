import axios from "axios"
import { POKEMON_BASE_URL } from '@/util/constant'
import { IPokemonListItem } from "@/interface/pokemonList";
import { IPokemonResponse } from '@/interface/pokemonList'

//Promise<IPokemonResponse> // will have previous data before data
//so 
interface IGetPokemonListResponse {
    status: number | undefined,
    data: IPokemonResponse //pull the data from here
}
//type
export const pokemonListService = {
    //this is returned as spromise
    getPokemonList: async (limit?: number, offset?: number): Promise<IGetPokemonListResponse> => {
        const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
        return response;
    }
}
//add type > beacause to accesss the inner data