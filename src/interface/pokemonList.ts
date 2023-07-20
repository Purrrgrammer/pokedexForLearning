//for pokemonList.ts/service

export interface IPokemonListResponse { //larger scale
    count: number
    next: string
    previous: null
    results: IPokemonListItem[]// from below
}
export interface IPokemonListItem { //smaller scale // or result
    name: string
    url: string
}
/* true data return

data ={

    count: 1281
    next: "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151"
    previous: null
    result:result[]
    
}
    */