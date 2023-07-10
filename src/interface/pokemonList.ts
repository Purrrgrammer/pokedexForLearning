//for pokemonList
export interface IPokemonListItem {
    name: string
    ul: string
}
export interface IPokemonResponse {
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