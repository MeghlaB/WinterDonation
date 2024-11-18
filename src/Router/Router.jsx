import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Components/Home';
import About from '../Components/About';
import Compaings from '../Components/Compaings';
import HowTo from '../Components/HowTo';
import Dashboard from '../Components/Dashboard';
import HowToWorks from '../Pages/HowToWorks';
import Feauters from '../Pages/feauters';
import Invloed from '../Pages/Invloed';
import AuthLayout from '../MainLayout/AuthLayout';
import Login from '../Components/Login'
import Register from '../Components/Register';
import DetailsPage from '../Pages/DetailsPage'
import PrivetRouter from '../PrivetRoute/PrivetRouter';

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
            
        ]
    },
   {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/howtoWorks',
      element:<HowToWorks></HowToWorks>
    },
    {
      path:'/features',
      element:<Feauters></Feauters>
    },
    {
      path:'/invloed',
      element:<Invloed></Invloed>
    },
    {
      path:'/details',
      element:<PrivetRouter>
        <DetailsPage></DetailsPage>
      </PrivetRouter>
    },
    {
      path:'/auth',
      element:<AuthLayout></AuthLayout>,
      children:[
            {
              path:'/auth/login',
              element:<Login></Login>
            },
            {
              path:'/auth/register',
              element:<Register></Register>
            }

      ]
    }
   
  ])

export default router