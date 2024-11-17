import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
   <div>
     <header>
        <Navbar></Navbar>
    </header>
    <Outlet></Outlet>
   </div>
  )
}
