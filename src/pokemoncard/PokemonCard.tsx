import { Type } from '@/interface/pokemonDetail'
import { Link } from 'react-router-dom'


interface PokemonCardProps {
    image: string,
    name: string,
    id: number,
    types: Type[],
}
//construct few data

/* old => 
interface PokemonCardProps {
    data= IPokemonDetailResponse
}

export function pokemonCard({ data }: PokemonCardProps) 
*/

export function pokemonCard({ image, name, id, types }: PokemonCardProps) {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-[275px] m-[auto]">
            <Link to={`/detail/${name}`} >
                <img className='rounded-t-lg max-h-[218px] p-[40px] w-full' src={image} alt="" />
            </Link>
            <div className='flex justify-between'>
                <h5 className="capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">#{id}</h5>
            </div>
            <div className='flex gap-2 justify-end' >
                {types.map((item) => {
                    return <span
                        key={`type-${item.type.name}`}
                        className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[16px]`}>
                        {item.type.name}
                    </span>
                })}
            </div>
        </div>
    )
}

export default pokemonCard