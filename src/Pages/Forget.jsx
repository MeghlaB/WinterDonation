import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../ContextApi/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase_Init/Firebase_init';

export default function Forget() {
const{setUsere} = useContext(AuthContext)
const emailRef = useRef()
    const handleForgetPassword = (e)=>{
        e.preventDefault()
        // navigate('/auth/forget')
        const email = emailRef.current.value;
        if(!email){
          toast.error('please provid your valid email')
        }
        else{
          sendPasswordResetEmail(auth,email)
          .then(()=>{
            toast.success('Verify Email')
          })
          .catch((err)=>{
            toast.error(`Failed to send reset email: ${err.message}`);
          })
        }
      }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       
    <form onSubmit={handleForgetPassword} className="card-body">
    <h1  className='text-xl lg:text-2xl font-bold text-center'>Reset Password</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="Email" placeholder="Email" name='email' ref={emailRef} className="input input-bordered" required />
      </div>
      <div className="form-control mt-6 space-y-4">
        <button className="btn bg-indigo-600 font-bold text-xl text-white">Send Reset Email</button>
        <ToastContainer></ToastContainer>
        <NavLink to={'/auth/login'} className="hover:underline text-blue-600 text-center">Back to Login</NavLink>
      </div>
    </form>
  </div>
  )
}
