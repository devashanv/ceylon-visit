import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Programs from './pages/programs.jsx';
import Contact from './pages/ContactUs.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/forgotpswd",
    element: <ForgotPassword />,
  },
  {
    path: "/resetpswd",
    element: <ResetPassword />,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
