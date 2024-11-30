import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-omega-sand.vercel.app/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-omega-sand.vercel.app/coffee/${params.id}`)
      },
      {
        path: 'coffees/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`https://coffee-store-server-omega-sand.vercel.app/coffee/${params.id}`)
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-omega-sand.vercel.app/users')
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
