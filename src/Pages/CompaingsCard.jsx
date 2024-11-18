import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CompaingsCard({cloth}) {
    const{id,image,title, description} = cloth
  return (
    <div className='my-7'>
      <div className="card bg-base-100 w-full h-[560px] shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-[350px] h-[250px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
            <NavLink to={'/details'} className="btn btn-primary">Donate Now</NavLink>
            </div>
        </div>
</div>
    </div>
  )
}
