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
  const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            }
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