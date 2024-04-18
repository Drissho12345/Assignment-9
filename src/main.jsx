import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './Component/Root/Root'
import ErrorPage from './Component/Error-page/ErrorPage'

import Card from './Component/Card/Card'
import CardDetails from './Component/Card Details/CardDetails'
import UpdateProfile from './Component/Update profile/UpdateProfile'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register';

// toast
  import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Component/Auth/AuthProvider'
import ProtectedRoute from './Component/Protected/ProtectedRoute'
import AboutUs from './Component/About Us/AboutUs'


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
        path:"/About Us",
        element: <AboutUs></AboutUs>,
      },
      {
        path:"/CardDetails/:id",
        element: <ProtectedRoute>
            <CardDetails></CardDetails>
        </ProtectedRoute>,
        loader: ()=>fetch("/industrial.json"),
      },
      {
        path:"/User",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:"/Login",
        element:<Login></Login>,
      },
      {
        path:"/Register",
        element:<Register></Register>,
      }
    ],
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>,
    <ToastContainer />,
  </React.StrictMode>,
)
