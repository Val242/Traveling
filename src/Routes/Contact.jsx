import React from 'react'
import bgImage from '../assets/contactbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import nature from "../assets/nature.png"
import lady from "../assets/lady.png"
import map from "../assets/map.png"
import plane from "../assets/plane.png"
import woman from "../assets/woman.png"
import mycrush from "../assets/mycrush.png"
import water from "../assets/water.png"

import { FiFacebook,FiTwitter,FiChrome} from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';
import { FaRegCopyright } from 'react-icons/fa';

import Footer from './Footer';

<FaRegCopyright />


function Contact() {
  return (
    <div  style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}><div className="grid grid-cols-[1fr_2fr]  ml-3 mr-9 align-middle">
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
                    Contact
                  </h1>
                </div>

                <div className='grid place-items-center h-screen '>
                  <div className=''>
                    <h2 className='text-center mb-7'>PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM</h2>
                  </div>
                  <form className='grid grid-rows-5 grid-cols-2 gap-5 w-[855px]'>
                     <input type="text"  placeholder='First Name'
                       className='grid  border border-[#9B9DB3] p-2'/>
                     <input type="text"  placeholder='Last Name' 
                       className='grid  border border-[#9B9DB3] p-2'/>
                      <input type="text" placeholder='Email' 
                       className='grid  border border-[#9B9DB3] p-2'/>
                      <input type="text" placeholder='Subject'
                        className='grid  border border-[#9B9DB3] p-2' />
                      <input type="text" placeholder='Message'
                       className='grid  border border-[#9B9DB3] p-2 row-span-3 col-span-2  ' />
                        </form>
                  
                    <div className='grid justify-center mt-4'>
                      <button className='bg-[#0336FF] rounded-2xl w-[135px] h-[33px]'>
                       Submit
                      </button>
                        </div>
                          </div>
                            <div>
                  <div className='grid grid-cols-7 grid-rows-1'>
                        <div>
                      <img src={nature} alt="nature" />
                        </div>
                        <div>
                      <img src={lady} alt="lady" />
                        </div>
                        <div>
                      <img src={map} alt="map" />
                        </div>
                         <div>
                      <img src={plane} alt="plane" />
                        </div>
                       <div>
                      <img src={woman} alt="woman" />
                       </div>
                       <div>
                      <img src={mycrush} alt="mycrush" />
                       </div>
                       <div>
                      <img src={water} alt="water" />
                      </div>
                </div>
                  <div className='grid place-items-center grid-cols-[1fr_1fr] mt-5  border-b border-b-[#C4C4C4]  '>
                          <div>
                            <p className='font-bold text-3xl'>Join 98,641 Monthly Readers. <br /> Subscribe Today!</p>
                          </div>
                          <div className='grid grid-cols-[2fr_1fr] gap-x-2 '>
                             <input type="email"  placeholder='Email Address'
                          
                          className='grid  border border-[#9B9DB3] p-2 rounded-[5px] '/>
                          
                          <div>
                            <button className='bg-[#0336FF] w-[150px] h-[50px]  rounded-[5px]'>
                              Subscribe
                            </button>
                          </div>
                          </div>
                  </div>
      <Footer></Footer>
              </div>




</div>
                
                
                
                
                
  )
}

export default Contact