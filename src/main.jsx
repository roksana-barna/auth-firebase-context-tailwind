import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Order from './components/privateRoute/Order.jsx';
import PrivateRouter from './components/privateRoute/PrivateRouter.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
    element: <Home></Home>
      },
      {
        
          path: "/login",
      element:<Login></Login>,
      
      },
      {
        
        path: "/register",
    element:<Register></Register>,
    
    },
    {
        
      path: "/order",
  element:<PrivateRouter><Order></Order></PrivateRouter>
  
  }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
        

  </React.StrictMode>,
)
