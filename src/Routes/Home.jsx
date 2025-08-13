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
        <div className="text-[#FFA500] grid grid-cols-5 self-center sm:text-[10px]  ">
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

         <div className="display grid grid-cols-[1fr_2fr] grid-rows-20 border-1 border-gray-600 p-4 mt-8 gap-5">
                
              <div className="grid grid-rows-[0.1fr_0.5fr_0.2fr_0.3fr] mx-2 place-items-center w-[438.23px] border-1 border-gray-600">
                    <div>
                  <h2 className="text-center font-bold">About me</h2>
                </div>
                    <img src={whiteWife} alt="" className="w-[363.9px]"/>
                    <div className="w-[363.9px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.
                    </div>
                    <div>
                       <button className="bg-[#0336FF] w-[150px] h-[50px] ">
          Read More
        </button>
                    </div>
              </div>
              <div className=" grid-rows-2 ">
                <div><img src={desert} alt="" /></div>
                <div className=" grid-rows-[1fr_3fr_3fr_1fr]">
                    <div><p>July, 15, 2021 - Tips and Tricks </p></div>
                    <div className="ml-2 mr-4"><h2 className="font-bold py-2">A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h2></div>
                    <div className="ml-2 mr-4"><p className=" pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p></div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-100 ml-2">

                      <div >
                           <GoLocation className="text-[#FFA500] inline w-[25px] h-[25px]"></GoLocation>Penang, Malaysia 
                        </div>
                      <div className="">
                            <FaCommentDots className="text-[#FFA500] inline w-[25px] h-[25px]"/>Comment (52)
                        </div>

                    </div>
                </div>
                  
              </div>
              <div className="border-2 border-black px-2 py-4 grid-rows-[1fr_4fr]">
                  
                      <div className="">
                               <h2 className="text-center font-bold">Categories</h2>
                      </div>
                     

                  
                    <div className="grid grid-rows-7">
                          <div className="mb-8 py-4 grid grid-cols-2 grid-rows-1 gap-100 ml-5">
                           <p>Europe</p> 
                           <p>(11)</p>
                            </div>
                          <div className="mb-8 py-4">Mountains</div>
                          <div className="mb-8 py-4">Traveling Video</div>
                          <div className="mb-8 py-4">Beauty of Seas</div>
                          <div className="mb-8 py-4">Cuisine</div>
                          <div className="mb-8 py-4">Guide of traveler</div>
                          <div className="mb-8 py-4">Other</div>
                      </div>
              </div>
              <div className="border-2 border-black">
                  
              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
              <div className="border-2 border-black">

              </div>
            

          
         
     
    </div>
     <Footer></Footer>
    </div>
  );
}
