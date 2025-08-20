import React from 'react'
import bgImage from '../assets/tipsbg.png'
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import goingWild from "../assets/goingWild.png"
import northPole from "../assets/northPole.png"
import summerVibes from "../assets/summerVibes.png"
import city from "../assets/city.png"
import chocolate from "../assets/chocolate.png"
import beaches from "../assets/beaches.png"
import trip101 from "../assets/trip101.png"
import waterFront from "../assets/waterFront.png"
import mywife from "../assets/blackBeauty.png"
import Footer from './Footer';
import BlogCard from '../BlogCard';

function Tips() {
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
                    Tips
                  </h1>
                </div>


                <div className='grid grid-cols-[1fr_2fr] gap-10 justify-center ml-7 '>
                      <div className='mx-auto '>
                        <h1 className='text-5xl font-extrabold'>
                          Maintaining your <span className='text-orange-400'>privacy</span> during travels.
                        </h1>
                      </div>
                      <div>
                        <p className='font-bold'>
                          Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec at lobortis enim, feugiat fermentum lobortis gravida in.
                          Tellus tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor, turpis dignissim. Facilisis purus nibh vitae arcu.
                          In tellus in amet nulla. Rutrum orci purus neque blandit cursus volutpat nisl morbi egestas. Adipiscing porta quis turpis
                          ut nulla morbi. Varius id tempor, ipsum leo.vivamus rhoncus, augue risus. Ornare posuere scelerisque a at. 
                          Ut nunc neque at commodo nulla egestas eros. Ullamcorper a eu nulla diam nec pulvinar sit dui nec. Mauris sed vestibulum vitae massa.
                          Ac morbi ut velit ac suscipit id. Venenatis scelerisque ut nam ultrices tortor integer. Odio ullamcorper rutrum  read more
                        </p>
                      </div>
                </div>
                <div className='grid grid-cols-3 grid-rows-3 gap-10 place-items-center '>
                   <BlogCard image={northPole} />
                    <BlogCard image={summerVibes} />
                    <BlogCard image={city} />
                    <BlogCard image={goingWild} />
                    <BlogCard image={chocolate} />
                    <BlogCard image={beaches} />
                    <BlogCard image={trip101} />
                     <BlogCard image={waterFront} />
                     <BlogCard image={mywife} />

                </div>
                <Footer></Footer>
      
      </div>
  )
}

export default Tips