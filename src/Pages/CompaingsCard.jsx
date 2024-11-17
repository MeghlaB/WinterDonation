import React from 'react'

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
            <button className="btn btn-primary">Donate Now</button>
            </div>
        </div>
</div>
    </div>
  )
}
