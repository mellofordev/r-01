import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"
import About from './routes/about.jsx'
import Profile from './routes/profile.jsx'
const router = createBrowserRouter([{
    path:'/',
    element:<App/>
  },{
    path:'/about',
    element:<About/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
