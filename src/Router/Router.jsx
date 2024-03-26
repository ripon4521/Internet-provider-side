import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/pricing/Pricing";
import Offer from "../Pages/Offer/Offer/Offer";
import SelfCare from "../Pages/SelfCare/SelfCare";
import Contact from "../Pages/Contact/Contact";
import Covarge from "../Pages/Covarege/Covarge";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/about',
          element:<About/>
        },{
          path:'/pricing',
          element:<Pricing/>
        },{
          path:'/offers',
          element:<Offer/>
        },{
          path:'/selfcare',
          element:<SelfCare/>
        },{
          path:'/contact',
          element:<Contact/>
        },{
          path:'/covarage',
          element:<Covarge/>
        }
      ]
    },
  ]);