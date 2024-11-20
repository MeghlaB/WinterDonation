import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CompaingsCard({cloth}) {
    const{id,image,title, description,division} =cloth
    // console.log(cloth)
  return (
    <div className='my-10'>
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img
          src={image}
          alt="title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p className='text-[17px] font-bold'>Division:{division}</p>
        <div className="card-actions justify-end">
          
          <NavLink to={'/details'} className="btn btn-primary">Donate Now</NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}
