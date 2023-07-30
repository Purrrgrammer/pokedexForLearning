import React from 'react'
import { Link } from 'react-router-dom'


export default function Pokemonoftheday() {
    return (
        <div>
            <Link to='/'>
                <div className='flex justify-center'>
                    <img src="/src/final front-end project resources/logo.webp" className='max-h-[80px] mt-[20px]' />
                </div>
            </Link>

            {/* pokemon of the day */}
            {/* <div className='pt-[200px] m-auto'>
                <div className='rounded-full bg-zinc-200 p-[200px]'>

                </div>
            </div> */}


        </div >
    )
}
