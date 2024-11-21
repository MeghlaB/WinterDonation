import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  const {user,logout} = useContext(AuthContext)
  return (
    <div className='my-2'>
     <div className=" container mx-auto  border text-center flex items-center  justify-center border-slate-800  py-10 rounded-2xl ">
      <div className=" text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold py-4"> Welcome {user?.displayName}  🌸</h1>
        <div className='py-4 '>
            <img className='w-30  border p-4 rounded-md mx-auto' src={user?.photoURL} alt="" />
            <p className='text-xl lg:text-2xl font-bold'>Email: {user?.email}</p>
            <p className='text-xl lg:text-2xl font-bold'>Name:{user?.displayName}</p>
        </div>
          <div className='flex flex-col space-y-4'>
          <NavLink to={'/update'} className="btn btn-primary">UpdateProfile</NavLink>
          </div>
          
        </div>
      
      </div>
</div>
    </div>
  )
}
