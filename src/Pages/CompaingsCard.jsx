import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CompaingsCard({cloth}) {
    const{id,image,title, description,division,contactInfo,status} =cloth
  return (
    <div className='my-6'>
      
    <div className="card bg-base-100 w-full h-[520px]  shadow-xl ">
      <figure className="px-10 pt-5">
        <img
        className='w-full h-[250px] rounded-lg'
          src={image}
          alt="title" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p><span className='text-xl  text-blue-900 font-bold'>Division:</span> <span className='text-gray-500 font-bold'>{division}</span></p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}  className="btn btn-primary">Donate Now</NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}
