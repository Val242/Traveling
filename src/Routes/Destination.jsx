import React from 'react'
import bgImage from '../assets/destinationbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import WTG from "../assets/WTG.png"
import '../App.css'
import TravelCard from '../TravelCard';
import northPole from "../assets/northPole.png"
import TecGirl from "../assets/TecGirl.png"
import TouristGirl from "../assets/TouristGirl.png"
import TravelingG from "../assets/TravelingG.png"
import Waterman from "../assets/Waterman.png"
import CoolView from "../assets/CoolView.png"
import Bus from "../assets/Bus.png"
import Bridge from "../assets/Bridge.png"
import HolyChina from "../assets/HolyChina.png"
import deer from "../assets/deer.png"
import Footer from './Footer';

function Destination() {
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
           <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">Destination</h1>
         </div>
   </div>
      {/* Intro Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center px-6 md:ml-7 md:mr-7 mb-10'>
        <div className='mx-auto p-4 rounded-lg'
          style={{ backgroundImage: `url(${WTG})`, backgroundSize: "cover" }}>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug'>
            <span className='text-orange-400 underline'>Where do </span>you want to go?
          </h1>
        </div>
        <div>
          <p className='font-bold text-sm md:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac.
            Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus
            ornare nibh vivamus. Quam elementum at velit viverra mattis.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className='col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 font-bold border border-[#535353] mx-auto h-auto md:h-[60px] items-center justify-center text-center px-4 py-2'>
          <div className="my-button1">South America</div>
          <div className="my-button1">North America</div>
          <div className="my-button1">Europe</div>
          <div className="my-button1">Africa</div>
          <div className="my-button1">Asia</div>
        </div>
      </div>

      {/* Travel Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center px-4 md:px-8 mb-12'>
        <TravelCard
          image={TecGirl}
          date="September 16, 2018"
          category="Tips & Tricks"
          title="Finding Love & Home In Tbilisi, Georgia"
          location="Georgia"
          comments={25}
        />
        <TravelCard
          image={TouristGirl}
          date="September 16, 2018"
          category="Tips & Tricks"
          title="Have you read the Beach by Alex?"
          location="Georgia"
          comments={15}
        />
        <TravelCard
          image={TravelingG}
          date="September 16, 2018"
          category="Tips & Tricks"
          title="The writer actually live in philippines"
          location="Georgia"
          comments={13}
        />
        <TravelCard
          image={Waterman}
          date="September 19, 2018"
          category="Tips & Tricks"
          title="Honestly it’s almost ridiculous how"
          location="Georgia"
          comments={52}
        />
        <TravelCard
          image={CoolView}
          date="September 20, 2018"
          category="Tips & Tricks"
          title="The only way to see the islands"
          location="Georgia"
          comments={25}
        />
        <TravelCard
          image={Bus}
          date="September 20, 2018"
          category="Tips & Tricks"
          title="Get away from the maddening crowds"
          location="Georgia"
          comments={53}
        />
        <TravelCard
          image={Bridge}
          date="September 19, 2018"
          category="Tips & Tricks"
          title="Matsumoto castle is considered one of"
          location="Georgia"
          comments={25}
        />
        <TravelCard
          image={HolyChina}
          date="September 16, 2018"
          category="Tips & Tricks"
          title="Many buildings especially in japan"
          location="Georgia"
          comments={25}
        />
        <TravelCard
          image={deer}
          date="September 16, 2018"
          category="Tips & Tricks"
          title="Finding Love & Home In Tbilisi, Georgia"
          location="Georgia"
          comments={25}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Destination
