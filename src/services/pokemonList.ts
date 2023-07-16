import axios from "axios"
import { POKEMON_BASE_URL } from '@/util/constant'
import { IPokemonListResponse } from '@/interface/pokemonList'
import { handleResponse, IResponse } from '@/util/handleResponse'

//Promise<IPokemonResponse> // will have previous data before data
//so 
interface IGetPokemonListResponse extends IResponse {
    status: number | undefined,
    data?: IPokemonListResponse //pull the data from here
}
//type
export const pokemonListService = {
    //this is returned as a promise
    getPokemonList: async (limit?: number, offset?: number): Promise<IGetPokemonListResponse> => {
        try {
            const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
            return handleResponse.success(response);
        } catch (error: any) {//not the errror from axious only
            return handleResponse.error(error);
        }
    }
}
//add type > beacause to accesss the inner data