import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import Header from './assets/components/Header/Header.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Users from './assets/components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        element: <Users></Users>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
