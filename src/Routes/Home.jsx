import React from "react";
import bgImage from "../assets/bgImage.png"; // correct path from Routes/ to assets/
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
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
        <div className="grid place-items-center h-screen">
      <div className="grid justify-center  ">
        <h2 className="text-white font-bold text-4xl"> THE COUNTER: <span className="text-[#FFA500]" >70</span> Countries <span className="text-[#FFA500]">1036</span> Cities </h2>
      </div>
      <div>
        <h1 className="text-white font-extrabold text-6xl">Leave your mark on all <br /> <span className="flex justify-center">over the world</span>  </h1>
      </div>
      <div>
        <button className="bg-[#0336FF] w-[150px] h-[50px]">
          Read More
        </button>
      </div>

      <div>
        <p className="text-white">Scroll Down to Continue</p>
      </div>
      </div>
    </div>
  );
}
