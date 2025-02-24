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
import Invloed from '../Pages/Invloed';
import AuthLayout from '../MainLayout/AuthLayout';
import Login from '../Components/Login'
import Register from '../Components/Register';
import DetailsPage from '../Pages/DetailsPage'
import PrivetRouter from '../PrivetRoute/PrivetRouter';
import UpdateProfile from '../Pages/UpdateProfile';
import ErrorPage from '../Pages/ErrorPage';
import Forget from '../Pages/Forget';
import Features from '../Pages/feauters';


  const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
              path:'/dashboard',
              element:<PrivetRouter><Dashboard></Dashboard></PrivetRouter>
            },
            {
              path:'/update',
              element:<UpdateProfile></UpdateProfile>
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
      element:<Features></Features>
    },
    {
      path:'/invloed',
      element:<Invloed></Invloed>
    },
    {
      path:'/details/:id',
      element:<PrivetRouter>
        <DetailsPage></DetailsPage>
      </PrivetRouter>,
      loader : async({params}) => {
        const res = await fetch("/Clothes.json")
        const data = await res.json()
        console.log(data)
        const singleData = data.find(d=>d.id == params.id)
        console.log(singleData)
        return singleData
    }
      
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
              path:'/auth/forget',
              element:<Forget></Forget>
            },
            {
              path:'/auth/register',
              element:<Register></Register>
            }

      ]
    }
   
  ])

export default router