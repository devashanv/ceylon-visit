import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Services from './components/Services/Services.jsx';
import About from './components/About/About.jsx';
import Updates from './components/Updates/Updates.jsx';
import Contact from './components/ContactUs/ContactUs.jsx';

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
    path: "/updates",
    element: <Updates />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
