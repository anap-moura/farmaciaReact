import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-black text-yellow-500 flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Drogaria APMC</Link> 
            <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar