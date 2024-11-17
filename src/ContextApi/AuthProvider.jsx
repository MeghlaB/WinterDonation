
import { data } from 'autoprefixer'
import React, { createContext, useEffect, useState } from 'react'
export  const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const[clothes , setClothes] = useState([])
    useEffect(()=>{
      fetch('/Clothes.json')
      .then((responser=>responser.json()))
      .then((data)=>setClothes(data))
    },[])
console.log(data)
const AuthInfo ={
  clothes
}
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
