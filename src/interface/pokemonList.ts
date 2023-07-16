//for pokemonList.ts/service
export interface IPokemonListItem { //smaller scale // or result
    name: string
    ul: string
}
export interface IPokemonListResponse { //larger scale
    count: number
    next: string
    previous: null
    results: IPokemonListItem[]// from above
}

/* true data return

data ={

    count: 1281
    next: "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151"
    previous: null
    result:result[]
    
}
    */