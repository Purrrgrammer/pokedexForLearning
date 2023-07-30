import { pokemonDetailService } from '@/services/pokemonDetail';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';

type pokemonType = {
    data: IPokemonDetailResponse | undefined
    loading: boolean
    error: null | any
}

const DetailPage = () => {
    const { name } = useParams()
    const [pokemon, setPokemon] = useState<pokemonType>({
        data: undefined,
        loading: true,
        error: null
    })
    const callData = async (name: string) => {
        const response = await pokemonDetailService.getPokemonDetail(name)
        if (response.status === 200) {
            if (response.data) {
                setPokemon({
                    data: { ...response.data, image: response.data?.sprites.other.dream_world.front_default || response.data?.sprites.other['official-artwork'].front_default },
                    loading: true,
                    error: null
                })
            }
        }
        else {
            setPokemon({
                data: undefined,
                loading: false,
                error: response.error,
            })
        }
    }
    useEffect(() => {
        if (name) callData(name)
        console.log("name executed", name)
        // console.log(callData)
    }, [name])

    return (

        <div className='w-[100%] m-[auto] max-w-[1500px] '>
            <div className='w-[100%] m-[auto] max-w-[1200px]'>
                {/* logo */}
                <Link to='/'>
                    <div className='flex justify-center'>
                        <img src="/src/final front-end project resources/logo.webp" className='max-h-[80px] mt-[20px]' />
                    </div>
                </Link>
                {/* This is card */}
                {/* NEWGRID */}
                <div className="pt-[100px]">
                    {pokemon.data && (
                        <div>
                            <h1 className="capitalize mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{name?.toUpperCase()}</h1>
                            <div>
                                {
                                    (pokemon.data.id) < 9 ?
                                        <h1 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>#00{pokemon.data.id}</h1> :
                                        (pokemon.data.id) > 9 && (pokemon.data.id) < 99 ?
                                            <h1 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>#0{pokemon.data.id}</h1> :
                                            <h1 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>#{pokemon.data.id}</h1>
                                }
                            </div>
                        </div>
                    )}
                    {pokemon.data && (
                        < div className="grid grid-cols-3 gap-5 ">
                            {/* Abilities */}
                            <div className="...">
                                <h5 className='font-bold'>Abilities</h5>
                                <div className='grid grid-cols-2 sm:grid-cols-1 '>
                                    {pokemon.data.abilities.map((item, index) => {
                                        return <div className='capitalize' key={pokemon.data?.id}>{`${index + 1}. ${item.ability.name}`}</div>
                                    })}
                                </div>
                                <div >
                                    <p>
                                        height {(pokemon.data.height / 10).toFixed(2)} cm
                                    </p>
                                    <p>
                                        weight {(pokemon.data.weight / 10).toFixed(2)} kg
                                    </p>
                                </div>
                                <div>
                                    {pokemon.data.types.map(type => { return <p key={`${pokemon.data?.id}`}>{type.type.name}</p> })}
                                </div>

                            </div>
                            {/* POKEMON */}
                            <div className="...">
                                <div>
                                    <img className=' h-[400px] p-[40px] w-full hover:scale-110 transform transition duration-500' src={pokemon.data.image} alt="" />
                                </div>
                            </div>
                            {/* Stats */}
                            <div className="...">
                                <h5 className='font-bold'>Stats</h5>
                                <div className='grid grid-cols-1 gap-1'>
                                    {pokemon.data.stats.map((item) => {
                                        return <div className='grid grid-cols-2 '>
                                            <div className=' text-blue-400 font-semibold capitalize mx-1 text-right'>
                                                {item.stat.name}
                                            </div>
                                            <div className='mx-1 text-left'>
                                                {item.base_stat}
                                            </div>

                                        </div>
                                    })}
                                    <div>total
                                        {/* { .reduce((pre, cur) => (pre + cur), 0)} */}
                                        {pokemon.data.stats.map(data => data.base_stat)}
                                    </div>
                                </div>
                            </div>
                        </div >

                    )}
                </div>

                <Link to={'/'}>
                    <b className='text-bold'>BACK</b>
                </Link>
            </div>
        </div >
    )
}

export default DetailPage
