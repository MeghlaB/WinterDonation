
import { data } from 'autoprefixer'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase_Init/Firebase_init'
import Home from '../Components/Home'
export  const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const[clothes , setClothes] = useState([])
    const [user , setUsere] = useState((null))
    useEffect(()=>{
      fetch('/Clothes.json')
      .then((responser=>responser.json()))
      .then((data)=>setClothes(data))
    },[])
    // email password
    const creatUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
    }
    const UpdateProfile = (updateData)=>{
      return updateProfile(auth.currentUser,updateData)
    }
    useEffect(()=>{
      const Unsubscribed  = onAuthStateChanged(auth,(currentUser)=>{
        console.log('currently',currentUser)
        setUsere(currentUser)
      })
        return ()=>[
          Unsubscribed()
        ]
    },[])
console.log(data)
const AuthInfo ={
  user,
  clothes,
  setUsere,
  signInUser,
  creatUser,
  UpdateProfile
}
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
