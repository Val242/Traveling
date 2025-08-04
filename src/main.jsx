import {
  createBrowserRouter,
  RouterProvider
} from "react-router"
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from "./Routes/AboutUs.jsx"
import Destination from "./Routes/Destination.jsx"
import Tips from "./Routes/Tips.jsx"
import Contact from "./Routes/Contact.jsx"



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>

  },
  {
    path: "/aboutus",
    element: <AboutUs/>
    
  },
   {
    path: "/destination",
    element: <Destination/>
    
  },
   {
    path: "/tips",
    element: <Tips/>
    
  },
  {
    path: "/contact",
    element: <Contact />
  }


])




createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}></RouterProvider>
)
