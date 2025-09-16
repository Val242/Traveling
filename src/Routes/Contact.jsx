import React from 'react';
import bgImage from '../assets/contactbg.png';
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import nature from "../assets/nature.png";
import lady from "../assets/lady.png";
import map from "../assets/map.png";
import plane from "../assets/plane.png";
import woman from "../assets/woman.png";
import mycrush from "../assets/mycrush.png";
import water from "../assets/water.png";
import Subscribe from '../Subscribe';

import Footer from './Footer';

function Contact() {
  return (
    <div>
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen w-full"
    >
      {/* Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4">
        <img src={logo} alt="Logo" className="w-[133px] h-[55.67px] mb-4 md:mb-0" />
        <div className="text-[#FFA500] grid grid-cols-2 sm:grid-cols-5 gap-2">
          <NavLink className="my-button" to="/">Home</NavLink>
          <NavLink className="my-button" to="/aboutus">About Us</NavLink>
          <NavLink className="my-button" to="/destination">Destination</NavLink>
          <NavLink className="my-button" to="/tips">Tips</NavLink>
          <NavLink className="my-button" to="/contact">Contact</NavLink>
        </div>
      </div>

      {/* Page Title */}
      <div className="flex justify-center items-center py-16">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">Contact</h1>
      </div>
</div>
      {/* Contact Form */}
      <div className="px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto">
        <h2 className="text-center mb-7 text-base sm:text-lg md:text-xl font-medium">
          PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border border-[#9B9DB3] p-2" />
          <input type="text" placeholder="Last Name" className="border border-[#9B9DB3] p-2" />
          <input type="email" placeholder="Email" className="border border-[#9B9DB3] p-2" />
          <input type="text" placeholder="Subject" className="border border-[#9B9DB3] p-2" />
          <textarea placeholder="Message" className="border border-[#9B9DB3] p-2 sm:col-span-2 h-32" />
        </form>
        <div className="flex justify-center mt-4">
          <button className="bg-[#0336FF] rounded-2xl px-6 py-2 text-white">
            Submit
          </button>
        </div>
      </div>

      {/* Image Row */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 px-4 mt-8">
        {[nature, lady, map, plane, woman, mycrush, water].map((src, idx) => (
          <img key={idx} src={src} alt={`img-${idx}`} className="w-full h-auto object-cover" />
        ))}
      </div>

      {/* Subscribe Section */}
     <Subscribe />

      <Footer />
    </div>
  );
}

export default Contact;
