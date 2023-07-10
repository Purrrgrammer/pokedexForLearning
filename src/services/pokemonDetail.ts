import axios from "axios"
import { POKEMON_BASE_URL } from '@/util/constant'
import { IPokemonDetailItem } from '@/interface/pokemonDetail'

//Promise<IPokemonResponse> // will have previous data before data
//so 
interface IGetPokemonDetailResponse {
    status: number | undefined,
    data: IGetPokemonDetailResponse //pull the data from here
}
//type
export const pokemonDetailService = {
    //this is returned as spromise
    getPokemonDetail: async (name: string): Promise<IGetPokemonDetailResponse> => {
        const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`)
        return response;
    }
}
//add type > beacause to accesss the inner data