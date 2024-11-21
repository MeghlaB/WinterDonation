import React, { useContext, useState } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
export default function Register() {
  const {creatUser , UpdateProfile,setUsere,setLoading,GoogleLogin} = useContext (AuthContext)
  const [error , setError] = useState("")
  const [showpassword , setShowPassword] = useState(false)
  const navigate = useNavigate()
    const handeleLRegister = e =>{
        e.preventDefault()
        setError('')
        const Name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(password.length<6){
          return setError('Password must be at least 6 character')
        }
        if (!/[A-Z]/.test(password)) {
          return setError("Password must contain at least one uppercase letter.");
      }
      if (!/[a-z]/.test(password)) {
          return setError("Password must contain at least one lowercase letter.");
      }
        creatUser (email,password)
        .then((result)=>{
          setUsere(result.user)
          e.target.reset()
          toast.success("Registration successful!")
          UpdateProfile({displayName:Name, 
            photoURL:photo})
          .then(()=>{
            setLoading(false)
            navigate('/')

          })
          .catch((err)=>{
            setLoading(false)
            setUsere(err.message)
          })

        })
        .catch((err)=>{
          toast.error(`Registration failed! Error:${err.code}`)
        })
    }
    // const handleGoogle = ()=>{
    //   GoogleLogin()
    //   .then((result)=>{
    //     setUsere(result.user)
    //     if(result.user){
    //       toast.success('Google Login Successful!')
    //       setTimeout(()=>{
    //         navigate(location?.state? location.state :'/')
    //       },1000)
    //     }
    //   })
    //   .catch((err)=>{
    //     setUsere(err.message)
    //   })
    //  }
    const handleGoogle = ()=>{
      GoogleLogin()
      .then((result)=>{
        setUsere(result.user)
        toast.success('Google Login Successful!')
        if(result.user){
          
          setTimeout(()=>{
            navigate(location?.state? location.state :'/')
          },1000)
        }
       
      })
      .catch((err)=>{
        setUsere(err.message)
      })
     }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-3 py-3">
      <form onSubmit={handeleLRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="enter your name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" placeholder="PhotoURl" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showpassword ?'text':'password'}
          placeholder="password"
           name='password' className="input input-bordered" required />
          <button
          onClick={()=>setShowPassword(!showpassword)} 
          className='absolute right-4 top-14'
          >
            {
              showpassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
            }
            
          </button>
         
          {
            error&&<p className='text-red-500'>{error}</p>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-3">Register</button>
         
        </div>
      </form>
      <p>
      <Link onClick={handleGoogle} className='btn border-blue-950 text-xl hover:bg-sky-950 hover:text-white w-full space-y-4'> Google <FcGoogle /></Link>
       </p>
       <ToastContainer></ToastContainer>
    </div>
  )
}
