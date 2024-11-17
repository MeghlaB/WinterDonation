import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-288px)] items-center justify-center  flex my-5'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
