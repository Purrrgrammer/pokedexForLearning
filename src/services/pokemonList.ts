import axios from "axios"
import { POKEMON_BASE_URL } from '@/util/constant'
import { handleResponse } from '@/util/handleResponse'
import { IGetPokemonListResponse } from '@/interface/index.ts'

//Promise<IPokemonResponse> // will have previous data before data
//so 
//getPokemonList from response of API

//type
export const pokemonListService = {
    //this is returned as a promise
    getPokemonList: async (limit?: number, offset?: number): Promise<IGetPokemonListResponse> => {
        try {
            const response = await axios.get(`${POKEMON_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`)
            console.log('RESPONSE', response)
            return handleResponse.success(response);
        } catch (error: any) {//not the errror from axious only
            return handleResponse.error(error);
        }
    }
}
//add type > beacause to accesss the inner data