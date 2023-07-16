import axios from "axios"
import { POKEMON_BASE_URL } from '@/util/constant'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'
import { handleResponse, IResponse } from '@/util/handleResponse'

//Promise<IPokemonResponse> // will have previous data before data
//so 
export interface IGetPokemonDetailResponse extends IResponse {
    status: number | undefined,
    data?: IPokemonDetailResponse //pull the data from here
}
//type
export const pokemonDetailService = {
    //this is returned as a promise
    getPokemonDetail: async (name: string): Promise<IGetPokemonDetailResponse> => {
        try {
            const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`)
            return handleResponse.success(response);
        } catch (error: any) {
            return handleResponse.error(error);
        }
    }
}
//add type > beacause to accesss the inner data