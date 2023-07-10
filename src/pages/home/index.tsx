import React from 'react';
import { useState, useEffect } from 'react'
import { pokemonDetailService } from '@/services/pokemonDetail';
import { pokemonListService } from '@/services/pokemonList';


const HomePage = () => {
    const callData = async () => {
        const data = await pokemonDetailService.getPokemonDetail('ditto')
        console.log('data', data.data)
    }
    useEffect(() => {
        callData()
        // console.log(callData)
    }, [])
    return (<div>
        HomePage
    </div>)
}

export default HomePage