import React from 'react'
import bolo from "../assets/sideHustle.png"
import logo from "../assets/Logo.png";
import { FiFacebook,FiTwitter,FiChrome} from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
  <div className='grid grid-cols-4 place-items-center mt-2 border-t border-t-[#C4C4C4] '>
                <div><img src={logo} alt="" className='w-[149px] h-[63px]'/></div>
                <div>Body</div>
                <div>Travel</div>
                <div>Account</div>
</div>
                  <div>
                <div className='text-white bg-[#535353] justify-around grid grid-cols-[1fr_1fr_1fr_1fr] border-t border-t-[#C4C4C4] gap-2'>
                  <div >
                    We are location independent bloggers, digital  influencers, 
                  small group tour organizers  and  world travelers with a serious passion for  the  sun, the sea and adventure.
                  Eight years and 60-something  countries  later and we are still on the road.
                  </div>
                  <div>
                    <ul className='list-none'>
                      <li>
                        Add: 221B John hope Street, Lekki, Lagos,Nigeria.  
                      </li>
                       <li>
                        T: +234 706 507 8544
                      </li>
                       <li>
                        E: info@redexplorers.com
                      </li>
                       <li>
                        W: www. redexplorers.com
                      </li>
                    </ul>
                  </div>
                  <div> 
                    <ul className='list-none'>
                              <li>
                                My List.  
                              </li>
                              <li>
                              My Requests
                              </li>
                              <li>
                              My Credits
                              </li>
                              <li>
                                My Info
                              </li>
                              <li>
                                Contact
                              </li>
                    </ul>
                    </div>
                  <div>
                    <ul className='list-none'>
                              <li>
                                Travel  
                              </li>
                              <li>
                              Why Travel
                              </li>
                              <li>
                              Become a Traveler
                              </li>
                              <li>
                                How Its Works
                              </li>
                              <li>
                                Traveling FAQs
                              </li>
                    </ul>
                  </div>
                </div>

                <div className='text-white bg-[#535353] place-items-center grid grid-cols-[1fr_1fr_2fr] border-t border-t-[#C4C4C4]'>
                    <div>
                      <img src={bolo} alt="" />
                    </div>
                    <div className='flex gap-2  '>
                      <FiFacebook/>
                      <FiTwitter/>
                      <FiChrome/>
                      <FaLinkedin/>
                    </div>
                    <div>
                    © 2021 RedExplorers. All rights reserved   |   Terms   |   Privacy   |   Site Map
                    </div>
                </div>
</div>

    </div>
  )
}

export default Footer