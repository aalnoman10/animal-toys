import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import router from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'
import toast from 'react-hot-toast';

export const ToastSuccess = (p) => toast(p);
export const ToastError = () => toast('Oops something is wong');

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
