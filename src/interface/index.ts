import { IResponse } from "@/util/handleResponse";
import { IPokemonListResponse } from "@/interface/pokemonList";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";

export interface IGetPokemonListResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonListResponse; //pull the data from here
}

export interface IGetPokemonDetailResponse extends IResponse {
  status: number | undefined;
  data?: IPokemonDetailResponse; //pull the data from here
}

export interface USERResponse {
  status: number | undefined;
  error?: any;
  data?: any;
}
