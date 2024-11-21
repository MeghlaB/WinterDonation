import React, { useContext, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider';
import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase_Init/Firebase_init';
export default function Login() {
  const{user ,signInUser ,GoogleLogin,setUsere} = useContext(AuthContext)
  const [showpassword , setShowPassword] = useState(false)
  const location = useLocation()

  const navigate = useNavigate()
    const handeleLogin = e =>{
      e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then((result)=>{
          setUsere(result.user)
          if(result.user){
            toast.success('Login SuccessFully!')
            setTimeout(()=>{
              navigate(location?.state? location.state :'/')
            },1000)
          }
         
        })
        .catch((err)=>{
         setUsere(err.message)
         toast.error(`Login failed${err.code}`)
        })
    }
   const handleGoogle = ()=>{
    GoogleLogin()
    .then((result)=>{
      setUsere(result.user)
      if(result.user){
        toast.success('Google Login Successful!')
        setTimeout(()=>{
          navigate(location?.state? location.state :'/')
        },1000)
      }
     
    })
    .catch((err)=>{
      setUsere(err.message)
    })
   }
const handleForgetPassword = ()=>{
  navigate('/auth/forget')
}
  return (
   <div>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-4 py-3">
      <form onSubmit={handeleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  placeholder="password" name='password' className="input input-bordered" required />
          <label onClick={handleForgetPassword} className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      
      </form> 
      <p>Don't Have An Account ?<span><NavLink to={'/auth/register'} className='text-blue-700 underline'>Register</NavLink></span></p>
      <p>
          <Link onClick={handleGoogle} className='btn border-blue-950 text-xl hover:bg-sky-950 hover:text-white flex items-center'> Google <FcGoogle /></Link>
        
       </p>
    </div>
    <ToastContainer></ToastContainer>
   </div>
  )
}

