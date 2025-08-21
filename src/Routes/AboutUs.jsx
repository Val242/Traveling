import React from 'react'
import bgImage from '../assets/aboutbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import WTG from "../assets/WTG.png"
import friends from "../assets/friends.png"
import Marshall from "../assets/Marshall.png"
import Tesla from "../assets/Tesla.png"
import Chocolatory from "../assets/Chocolatory.png"
import Boss from "../assets/Boss.png"
import nature from "../assets/nature.png"
import lady from "../assets/lady.png"
import map from "../assets/map.png"
import plane from "../assets/plane.png"
import woman from "../assets/woman.png"
import mycrush from "../assets/mycrush.png"
import water from "../assets/water.png"

import Footer from './Footer';

function AboutUs() {
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
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">About Us</h1>
      </div>
</div>
      {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-7 justify-center mt-10 px-6">
        <div
          className="mx-auto"
          style={{ backgroundImage: `url(${WTG})`, backgroundSize: "cover" }}
        >
          <h1 className="text-3xl md:text-5xl font-sans">
            Hey, We are the Red Explorers Brief History
            <span className="text-orange-400"> About Us </span>
          </h1>
        </div>
        <div>
          <p className="font-bold leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac...
          </p>
        </div>
      </div>

      {/* Friends Image */}
      <div className="grid justify-center mx-6">
        <img src={friends} alt="friends" className="rounded-xl" />
      </div>

      {/* Long Text Section */}
      <div className="mt-10">
        <p className="font-bold leading-loose mx-6 text-base md:text-lg pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet...
        </p>
      </div>

      {/* Story Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <div className="grid gap-4">
          <h1 className="text-2xl md:text-3xl">Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="grid gap-4">
          <h1 className="text-2xl md:text-3xl">Who are Red Explorers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="grid gap-4">
          <h1 className="text-2xl md:text-3xl">About Our Cameraman</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="grid gap-4">
          <h1 className="text-2xl md:text-3xl">What you'll Learn Here</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="font-bold">On Our Website You’ll find:</p>
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-6 bg-[#EDEDED] py-5">
        <img src={Marshall} alt="Marshall" className="w-[150px] md:w-[205px]" />
        <img src={Tesla} alt="Tesla" className="w-[150px] md:w-[205px]" />
        <img src={Chocolatory} alt="Chocolatory" className="w-[150px] md:w-[205px]" />
        <img src={Boss} alt="Boss" className="w-[150px] md:w-[205px]" />
      </div>

      {/* Customer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-7 justify-center mt-10 px-6">
        <div
          className="mx-auto"
          style={{ backgroundImage: `url(${WTG})`, backgroundSize: "cover" }}
        >
          <h1 className="text-3xl md:text-5xl font-sans">
            What <span className="text-orange-400 underline">Customer says </span>
            <span className="underline">About us</span>
          </h1>
        </div>
        <div>
          <p className="font-bold leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="rounded-3xl overflow-hidden p-4 bg-white shadow">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="mt-3 font-semibold">Joy Kim - Explorer</p>
        </div>
        <div className="rounded-3xl overflow-hidden p-4 bg-white shadow">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="mt-3 font-semibold">Alex Doe - Traveler</p>
        </div>
        <div className="rounded-3xl overflow-hidden p-4 bg-white shadow">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p className="mt-3 font-semibold">Maria Smith - Adventurer</p>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3 my-10 px-6">
        <img src={nature} alt="nature" className="rounded-lg" />
        <img src={lady} alt="lady" className="rounded-lg" />
        <img src={map} alt="map" className="rounded-lg" />
        <img src={plane} alt="plane" className="rounded-lg" />
        <img src={woman} alt="woman" className="rounded-lg" />
        <img src={mycrush} alt="mycrush" className="rounded-lg" />
        <img src={water} alt="water" className="rounded-lg" />
      </div>

      {/* Subscribe Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-5 border-b border-b-[#C4C4C4] pb-6 px-6">
        <div>
          <p className="font-bold text-xl md:text-3xl text-center md:text-left">
            Join 98,641 Monthly Readers. <br /> Subscribe Today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-2 mt-4 md:mt-0 w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#9B9DB3] p-2 rounded-[5px]"
          />
          <button className="bg-[#0336FF] text-white w-full sm:w-[150px] h-[50px] rounded-[5px]">
            Subscribe
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs
