import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/winnterDonation.avif'
export default function Navbar() {
  return (
    <div className="navbar bg-blue-950 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to={'/'}>Home</NavLink>
     <NavLink to={'/Compaigns'}>Donation Campaigns</NavLink>
     <NavLink to={'/howTo'}>How to Help</NavLink>
     <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-[18px] lg:text-xl"><span><img className='w-10 h-10 rounded-full' src={logoImg} alt="" /></span>Winnter Donation</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-bold">
     <NavLink className={({ isActive}) =>isActive ? "underline text-emerald-500" : ""
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
    <NavLink to={'login'} className="btn">Login</NavLink>
  </div>
</div>
  )
}
