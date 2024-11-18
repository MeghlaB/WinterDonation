import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider';
export default function Login() {
  const{signInUser ,GoogleLogin,setUsere} = useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
    const handeleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then((result)=>{
          setUsere(result.user)
          // navigate('/')
          navigate(location?.state? location.state :'')
        })
        .catch((err)=>{
         console.log(err.message)
        })
    }
   const handleGoogle = ()=>{
    GoogleLogin()
    .then((result)=>{
      setUsere(result.user)
      navigate(location?.state? location.state :'')
    })
    .catch((err)=>{
      setUsere(err.message)
    })
   }
  return (
   <div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handeleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't Have An Account ?<span><NavLink to={'/auth/register'} className='text-blue-700 underline'>Register</NavLink></span></p>
       <p>
          <Link onClick={handleGoogle} className='btn border-blue-950 text-xl hover:bg-sky-950 hover:text-white w-full'> Google <FcGoogle /></Link>

       </p>
      </form> 
    </div>
   
   </div>
  )
}

