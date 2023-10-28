import axios from "axios";
import { POKEMON_BASE_URL } from "@/util/constant";
import { handleResponse } from "@/util/handleResponse";
import { IGetPokemonDetailResponse } from "@/interface/index.ts";

//Promise<IPokemonResponse> // will have previous data before real data coming
//so
//type
export const pokemonDetailService = {
  //this is returned as a promise
  getPokemonDetail: async (
    name: string
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
//add type > beacause to accesss the inner data
