import React from 'react'
import bgImage from '../assets/destinationbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import WTG from "../assets/WTG.png"
import '../App.css'

function Destination() {
  return (
    <div style={{
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
      <div className='grid place-items-center h-screen'>
                  <h1 className='text-white font-bold text-6xl grid place-items-center h-screen'>
                  Destination
                  </h1>
                </div>
                  <div className='grid grid-cols-2 grid-rows-2 gap-10 justify-center ml-7 '>
                     
                      <div className='mx-auto ' style={{
                backgroundImage: `url(${WTG})`,
                backgroundSize: "cover"}}>
                        <h1 className='text-5xl font-extrabold'>
                          <span className='text-orange-400 underline'>Where do </span>you want to go?
                        </h1>
                      </div>
                      <div>
                        <p className='font-bold'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.

                        </p>
                      </div>
                
                <div className='grid grid-cols-5 place-items-center mt-6 font-bold border col-span-2 w-[1100px] border-[#535353] mx-auto h-[60px] '>
                  <div className="my-button1 w-[124px] self-center">
                          South America
                  </div>
                  <div className="my-button1 w-[124px]">
                          North America
                  </div>
                  <div className="my-button1 w-[124px]">
                          Europe
                  </div>
                  <div className="my-button1 w-[124px]">
                          Africa
                  </div>
                  <div className="my-button1 w-[124px]">
                          Asia
                  </div>

                </div>
                    </div>

                            <div className='grid grid-cols-3 grid-rows-3 gap-10 place-items-center'>
                                <div>
                                  
                                </div>

                            </div>


              </div>
  )
}

export default Destination