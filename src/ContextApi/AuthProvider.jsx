import React, { createContext } from 'react'
export  const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const AuthInfo = {
        name:"meghla"
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}
