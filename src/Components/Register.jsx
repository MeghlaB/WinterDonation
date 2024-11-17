import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const {creatUser} = useContext (AuthContext)
  const navigate = useNavigate()
    const handeleLRegister = e =>{
        e.preventDefault()
        const Name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)
        
        creatUser (email,password)
        .then((result)=>{
          console.log(result.user)
          navigate('/')

        })
        .catch((err)=>{
          console.log(err.message)
        })
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  )
}
