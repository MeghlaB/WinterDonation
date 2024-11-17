import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import About from '../Components/About';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Compaings from '../Components/Compaings';
import HowTo from '../Components/HowTo';
import Dashboard from '../Components/Dashboard';
  const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout></MainLayout>,
        errorElement:<p className='text-4xl font-bold text-center pt-9 text-red-600 '>404 page not found</p>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'Compaigns',
              element:<Compaings></Compaings>
            },
            {
              path:'howTo',
              element:<HowTo></HowTo>
            },
            {
              path:'dashboard',
              element:<Dashboard></Dashboard>
            },
            // {
            //     path:'/about',
            //     element:<About></About>
            // }
        ]
    },
   
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'regiter',
      element:<Register></Register>

    }
  ])

export default router