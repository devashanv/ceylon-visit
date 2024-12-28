import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Programs from './pages/programs.jsx';
import Contact from './components/ContactUs/ContactUs.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';


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

  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
