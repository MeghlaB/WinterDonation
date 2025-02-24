import React, { useContext, useState } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/winnterDonation.avif'

export default function Navbar() {
  const {user,logout} = useContext(AuthContext)
  return (
    <div className="navbar bg-blue-950 text-white   ">
  <div className="navbar-start">
    <div className="dropdown relative pt-4">
      <div tabIndex={0} role=" button" className="btn btn-ghost text-center block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[4] mt-3 w-52 p-2 shadow">
        <NavLink to={'/'}>Home</NavLink>
     <NavLink to={'/Compaigns'}>Donation Campaigns</NavLink>
     <NavLink to={'/howTo'}>How to Help</NavLink>
     <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-[12px] lg:text-xl"><span><img className=' w-5 h-5 lg:w-10 lg:h-10 rounded-full' src={logoImg} alt="" /></span>Winnter Donation</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-bold">
     <NavLink className={({ isActive}) =>isActive ? "underline text-emerald-500 text-2xl" : ""
  } to={'/'}>Home</NavLink>
     <NavLink className={({ isActive}) =>isActive ? "underline text-emerald-500" : ""
  } to={'/Compaigns'}>Donation Campaigns</NavLink>
     <NavLink className={({ isActive}) =>isActive ? "underline text-emerald-500" : ""
  } to={'/howTo'}>How to Help</NavLink>
     <NavLink className={({ isActive}) =>isActive ? "underline text-emerald-500" : ""
  } to={'/dashboard'}>Dashboard</NavLink>

     
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?.email?
      <div className='flex items-center gap-2'>
        <img  className=' w-5 h-5 lg:w-10 lg:h-10 rounded-full ' src={user?.photoURL} alt="" />
        <p className='text-xs lg:text-[14px]'>{user?.displayName}</p>
        <button onClick={logout} className="btn">LogOut</button>
      </div>
      : <NavLink to={'/auth/login'} className="btn">Login</NavLink>
    }
  
   
  </div>
</div>
  )
}
