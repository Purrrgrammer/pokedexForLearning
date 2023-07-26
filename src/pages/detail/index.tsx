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

        <div className='w-[90%] m-[auto] max-w-[1100px]'>
            <div className='w-[90%] m-[auto] max-w-[600px]'>
                {/* This is card */}
                <Link to={'/'}>
                    back
                </Link>
                {pokemon.data && (
                    <div className="h-[100%] w-[100%] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[auto]">
                        <div>
                            <img className=' h-[400px] p-[40px] w-full' src={pokemon.data.image} alt="" />
                            {/* max-h-[218px] */}
                        </div>
                        <div className='flex justify-between '>
                            <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">#{pokemon.data.id}</h5>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]'>
                            {/* H/W */}
                            <div>
                                <div>
                                    <div className='flex gap-x-[10px]'>
                                        <div>Height:</div>
                                        <div>{pokemon.data.height} m.</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex gap-x-[10px]'>
                                        <div>Weight:</div>
                                        <div>{pokemon.data.weight} kg.</div>
                                    </div>
                                </div>
                            </div>
                            {/* types */}
                            <div className='flex gap-2 justify-start sm:justify-end mt-[16px]' >
                                {pokemon.data.types.map((item) => {
                                    return <span className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}>
                                        {item.type.name}
                                    </span>
                                })}
                            </div>
                            {/* Abilities */}
                            <div>
                                <h5 className='font-bold'>Abilities</h5>
                                <div className='grid grid-cols-2 sm:grid-cols-1 '>
                                    {pokemon.data.abilities.map((item, index) => {
                                        return <div className='capitalize '>{`${index + 1}. ${item.ability.name}`}</div>
                                    })}
                                </div>
                            </div>
                            {/* Stats */}
                            <div>
                                <h5 className='font-bold'>Stats</h5>
                                <div className='grid grid-cols-1 gap-[10px]'>
                                    {pokemon.data.stats.map((item) => {
                                        return <div className='flex justify-between'>
                                            <div className='text-blue-400 font-semibold capitalize'>
                                                {item.stat.name}
                                            </div>
                                            <div>
                                                {item.base_stat}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default DetailPage

{/* {pokemon.data && (
                        <PokemonCard
                            image={pokemon.data.sprites.other.dream_world.front_default || ''}
                            name={pokemon.data.name}
                            id={pokemon.data.id}
                            types={pokemon.data.types}
                        />
                    )
                    } */}