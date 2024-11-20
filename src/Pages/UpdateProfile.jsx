import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const{UpdateProfile,setUsere, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()
    const hanldeProfile = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        UpdateProfile({displayName
          :name , photoURL:photo})
        .then(()=>{
            navigate('/dashboard')
            setLoading(false)
        })
        .catch((err)=>{
          setUsere(null)
          (err.message)
          setLoading(false)
            
        })
    }
  return (
    <div className="card bg-base-100 w-full mx-auto mt-8 max-w-sm shrink-0 shadow-2xl">
    <form  onSubmit={hanldeProfile} className="card-body ">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="enter your name" name='name' className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input type="url" placeholder="PhotoURl" name='photo' className="input input-bordered" required />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Update</button>
       
      </div>
    </form>
  </div>
  )
}
