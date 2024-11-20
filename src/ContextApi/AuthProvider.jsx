
import { data } from 'autoprefixer'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../Firebase_Init/Firebase_init'
import { GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from 'firebase/auth/cordova';

const Provider = new GoogleAuthProvider();
export  const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const[clothes , setClothes] = useState([])
    const [user , setUsere] = useState((null))
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
      fetch('/Clothes.json')
      .then((responser=>responser.json()))
      .then((data)=>setClothes(data))
    },[])
    // email password
    const creatUser = (email,password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
     setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    const UpdateProfile = (updateData)=>{
      setLoading(true)
      return updateProfile(auth.currentUser,updateData)
    }
    const logout =()=>{
      setLoading(true)
      return signOut(auth)
    }
    const GoogleLogin = ()=>{
      setLoading(true)
      return signInWithPopup(auth ,Provider)
    }
    useEffect(()=>{
      const Unsubscribed  = onAuthStateChanged(auth,(currentUser)=>{
        console.log('currently',currentUser)
        setUsere(currentUser)
        setLoading(false)
      })
        return ()=>[
          Unsubscribed()
        ]
    },[])
const AuthInfo ={
  user,
  clothes,
  setUsere,
  signInUser,
  creatUser,
  UpdateProfile,
  logout,
  loading,
  setLoading,
  GoogleLogin,

}
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
