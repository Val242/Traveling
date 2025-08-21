import React from 'react'
import bolo from "../assets/sideHustle.png"
import logo from "../assets/Logo.png";
import { FiFacebook, FiTwitter, FiChrome } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
      {/* Top Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-4 place-items-center mt-2 border-t border-t-[#C4C4C4] gap-4 sm:gap-0 px-4'>
        <div><img src={logo} alt="" className='w-[149px] h-[63px]'/></div>
        <div>Body</div>
        <div>Travel</div>
        <div>Account</div>
      </div>

      {/* Middle Section */}
      <div className='text-white bg-[#535353] justify-around grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-t-[#C4C4C4] gap-6 px-6 py-6'>
        <div>
          We are location independent bloggers, digital influencers, 
          small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
          Eight years and 60-something countries later and we are still on the road.
        </div>
        <div>
          <ul className='list-none space-y-2'>
            <li>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</li>
            <li>T: +234 706 507 8544</li>
            <li>E: info@redexplorers.com</li>
            <li>W: www.redexplorers.com</li>
          </ul>
        </div>
        <div>
          <ul className='list-none space-y-2'>
            <li>My List</li>
            <li>My Requests</li>
            <li>My Credits</li>
            <li>My Info</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className='list-none space-y-2'>
            <li>Travel</li>
            <li>Why Travel</li>
            <li>Become a Traveler</li>
            <li>How It Works</li>
            <li>Traveling FAQs</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-white bg-[#535353] place-items-center grid grid-cols-1 sm:grid-cols-3 border-t border-t-[#C4C4C4] gap-4 px-6 py-4 text-center sm:text-left'>
        <div className='flex justify-center sm:justify-start'>
          <img src={bolo} alt="" className='max-w-[120px]'/>
        </div>
        <div className='flex justify-center sm:justify-start gap-4 text-xl'>
          <FiFacebook/>
          <FiTwitter/>
          <FiChrome/>
          <FaLinkedin/>
        </div>
        <div className='text-sm'>
          © 2021 RedExplorers. All rights reserved | Terms | Privacy | Site Map
        </div>
      </div>
    </div>
  )
}

export default Footer
