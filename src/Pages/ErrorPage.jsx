import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='bg-red-400 border rounded-2xl w-11/12 h-[450px] mx-auto my-4 md:my-12 lg:my-28'>
        <div className= 'flex items-center justify-center pt-4 lg:pt-20'>
      <p className='text-4xl font-bold text-center  '>404 page not found</p>
      
    </div>
    <div className='flex items-center justify-center my-4'>
     <NavLink to={'/'} className='btn btn-success'>Go Home</NavLink>
    </div>
    </div>
  )
}
