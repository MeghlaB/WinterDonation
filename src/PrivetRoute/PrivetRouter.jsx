import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivetRouter({children}) {
    const {user ,loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-center mt-4'>
            <span className="loading loading-bars loading-lg "></span>
        </div>
    }
    if(user && user?.email){
        return children
    }
  return (
    <Navigate to={'/auth/login'}></Navigate>
  )
}
