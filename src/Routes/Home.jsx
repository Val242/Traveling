import React from "react";
import bgImage from "../assets/bgImage.png"; // correct path from Routes/ to assets/
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
 // Font Awesome
// or import { BsChatDots } from "react-icons/bs"; // Bootstrap Icons

import '../App.css'
import Footer from "./Footer";
import whiteWife from "../assets/whiteWife.png"
import desert from "../assets/desert.png"

export default function Home() {
  return (
    <div>
   <div
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  }}
>
  {/* NAVBAR */}
  <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4">
    <img
      src={logo}
      alt="Logo"
      className="w-[100px] sm:w-[120px] md:w-[133px] h-auto mb-4 md:mb-0"
    />
    <div className="text-[#FFA500] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-sm sm:text-base">
      <NavLink className="my-button" to="/">
        Home
      </NavLink>
      <NavLink className="my-button" to="/aboutus">
        About Us
      </NavLink>
      <NavLink className="my-button" to="/destination">
        Destination
      </NavLink>
      <NavLink className="my-button" to="/tips">
        Tips
      </NavLink>
      <NavLink className="my-button" to="/contact">
        Contact
      </NavLink>
    </div>
  </div>

  {/* HERO CONTENT */}
  <div className="grid place-items-center h-[80vh] md:h-screen text-center px-4">
    <div className="mb-4">
      <h2 className="text-white font-bold text-lg sm:text-2xl md:text-4xl">
        THE COUNTER:{" "}
        <span className="text-[#FFA500]">70</span> Countries{" "}
        <span className="text-[#FFA500]">1036</span> Cities
      </h2>
    </div>

    <div className="mb-6">
      <h1 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl leading-snug">
        Leave your mark on all <br />
        <span className="block">over the world</span>
      </h1>
    </div>

    <div className="mb-6">
      <button className="bg-[#0336FF] text-white rounded-lg w-[120px] sm:w-[150px] h-[45px] sm:h-[50px] text-sm sm:text-base hover:bg-blue-700 transition">
        Read More
      </button>
    </div>

    <div>
      <p className="text-white text-sm sm:text-base">
        Scroll Down to Continue
      </p>
    </div>
  </div>
</div>

        
     <Footer></Footer>
    </div>
  );
}
