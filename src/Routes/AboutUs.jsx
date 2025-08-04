import React from 'react'
import bgImage from '../assets/aboutbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function AboutUs() {
  return (
    <div  style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}>

              <div className="grid grid-cols-[1fr_2fr]  ml-3 mr-9 align-middle">
        <div className="">
         <img src={logo} alt="Logo" 
         
         className="w-[133px] h-[55.67px] "
         />

        </div>
        <div className="text-[#FFA500] grid grid-cols-5 self-center  ">
         <div className="my-button w-[124px]"><NavLink to= "/"> Home</NavLink></div> 
         <div className="my-button w-[124px]"><NavLink to = "/aboutus">About Us</NavLink></div> 
         <div className="my-button w-[124px]"><NavLink to = "/destination">Destination</NavLink></div> 
         <div className="my-button w-[124px]"><NavLink to = "/tips">Tips</NavLink></div> 
         <div className="my-button w-[124px]"><NavLink to = "/contact">Contact</NavLink></div> 


        </div>


      </div>
          </div>
  )
}

export default AboutUs