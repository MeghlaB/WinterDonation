import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import AuthProvider from './ContextApi/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
