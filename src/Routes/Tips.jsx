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
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl">Tips</h1>
      </div>
</div>
      {/* Intro Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center px-6 md:ml-7 md:mr-7 mb-10'>
        <div className='mx-auto'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-center md:text-left'>
            Maintaining your <span className='text-orange-400'>privacy</span> during travels.
          </h1>
        </div>
        <div>
          <p className='font-bold text-sm md:text-base leading-relaxed'>
            Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec at lobortis enim, feugiat fermentum lobortis gravida in.
            Tellus tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor, turpis dignissim. Facilisis purus nibh vitae arcu.
            In tellus in amet nulla. Rutrum orci purus neque blandit cursus volutpat nisl morbi egestas. Adipiscing porta quis turpis
            ut nulla morbi. Varius id tempor, ipsum leo. Vivamus rhoncus, augue risus. Ornare posuere scelerisque a at. 
            Ut nunc neque at commodo nulla egestas eros. Ullamcorper a eu nulla diam nec pulvinar sit dui nec. Mauris sed vestibulum vitae massa.
            Ac morbi ut velit ac suscipit id. Venenatis scelerisque ut nam ultrices tortor integer. Odio ullamcorper rutrum... <span className="text-orange-400">read more</span>
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center px-4 md:px-8 mb-12'>
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

      {/* Footer */}
      <Footer />
   </div>
  )
}

export default Tips
