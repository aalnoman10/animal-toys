import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import router from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
