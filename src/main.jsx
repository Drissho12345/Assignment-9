import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './Component/Root/Root'
import ErrorPage from './Component/Error-page/ErrorPage'

import Card from './Component/Card/Card'
import CardDetails from './Component/Card Details/CardDetails'
import UpdateProfile from './Component/Update profile/UpdateProfile'


const  router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Card></Card>,
      },
      {
        path:"/CardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: ()=>fetch("/industrial.json"),
      },
      {
        path:"/User",
        element: <UpdateProfile></UpdateProfile>
      }
    ],
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>,
)
