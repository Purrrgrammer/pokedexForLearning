import { } from '@/components/SearchForm'
import SearchForm from '@/components/SearchForm/SearchForm';
import PokemonCard from '@/pokemoncard/PokemonCard';
import { usePokemonListStore } from '@/store/pokemonList'
import React from 'react';
import ReactLoading from "react-loading";
// import { Section, Title, Article, Prop, list } from "./generic";


//why you dont display the data within Home page
//form > store > home


//from store
const HomePage = () => {
    const { pokemon, fetchPokemon } = usePokemonListStore()
    // console.log('this is raw pokemon data', fetchPokemon)
    return (
        <div className='w-[90%] m-[auto] max-w-[1100px]'>
            <div className='flex justify-center'>
                <img src="/final front-end project resources/logo.webp" className='max-h-[80px] mt-[20px]' />
            </div>
            <SearchForm />
            {
                fetchPokemon.loading && (
                    <div className='h-[600px] flex justify-center items-center'>
                        <ReactLoading type='spin' color='#fff' />
                    </div>
                )
            }
            {!fetchPokemon.loading &&
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-[20px] mt-[40px]'>
                    {/* mapping raw pokemon data */}
                    {pokemon.data?.map((item) => {
                        return <React.Fragment key={`pokemon-${item.name}`}>
                            <PokemonCard image={item.sprites.other.dream_world.front_default || ''}
                                name={item.name}
                                id={item.id}
                                types={item.types} />
                        </React.Fragment>
                    })}
                </div>}
        </div >

    )
}

export default HomePage

{/* return <div key={`pokemon-${item.id}`}>
                    {item.name} */}

