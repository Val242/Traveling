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

function AboutUs() {
  return (
    <div>
    <div  style={{
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
     
            
          </div>
          <div className='grid grid-cols-2 mb-10 gap-7 justify-center mt-10 ml-7 '>
                               
                                <div className='mx-auto ' style={{
                          backgroundImage: `url(${WTG})`,
                          backgroundSize: "cover"}}>
                                  <h1 className='text-5xl font-sans'>
                                    Hey, We are the Red Explorers Brief History<span className='text-orange-400 '>About Us </span>
                                  </h1>
                                </div>
                                <div>
                                  <p className='font-bold line leading-loose'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.
Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris 
          
                                  </p>
                                </div>
                          
                        
                              </div>
                          <div className='grid grid-cols-1 grid-rows-1 justify-center mx-8'>
                                      <img src={friends} alt="" />
                          </div>
                          <div className='mt-10'>
                            <p className='font-bold line leading-loose mx-8 text-[18px] pb-10'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.
                               Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae. 
Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent rhoncus.
                            </p>
                          </div>
                          <div className='grid grid-cols-2 grid-rows-2 gap-y-3 gap-x-6'>
                            <div className='grid grid-rows-[1fr_4fr_4fr_4fr_2fr]'>
                              <div className=''>
                                      <h1 className='text-3xl'>Our Story</h1>
                              </div>
                                <div>
                                  <p className='font-sans '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
                                </div>
                            </div>

                                    <div className='grid grid-rows-[1fr_4fr_4fr_4fr_2fr] '>
                              <div className=''>
                                      <h1 className='text-3xl'>Who are Red Explorers</h1>
                              </div>
                                <div>
                                  <p className='font-sans '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans span-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
                                </div>
                            </div>

                                      <div className='grid grid-rows-[1fr_4fr_4fr_4fr_2fr] '>
                              <div  >
                                      <h1 className='text-3xl'> About Our Cameraman</h1>
                              </div>
                                <div>
                                  <p className='font-sans '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. </p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                                </div>
                                <div>
                                  <p className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
                                </div>
                            </div>

                            <div className='grid grid-rows-[1fr_4fr_4fr_4fr_2fr]'>
                              <div>
                                 <h1 className='text-3xl'> What you'll Learn Here</h1>
                              </div>
                              <div>
                                <p className='font-sans pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                              </div>
                              <div>
                                <p className='font-sans pb-5 row-span-3'>On Our Website You’ll find:</p>
                              
                                <ul className=''>
                                    <li> Lorem ipsum dolor sit amet, consectetur.</li>
                                     <li> Lorem ipsum dolor sit amet, consectetur.</li>
                                      <li> Lorem ipsum dolor sit amet, consectetur.</li>
                                       <li> Lorem ipsum dolor sit amet, consectetur.</li>
                                        <li> Lorem ipsum dolor sit amet, consectetur.</li>
                                </ul>
                              </div>

                            </div>

                          </div>

                          <div className='flex justify-evenly bg-[#EDEDED] py-5'>
                            <div><img src={Marshall} alt="" className='w-[205px] h-[142px]' /></div>
                             <div><img src={Tesla} alt="" className='w-[205px] h-[142px]'/></div>
                              <div><img src={Chocolatory} alt="" className='w-[205px] h-[142px]'/></div>
                               <div><img src={Boss} alt="" className='w-[205px] h-[142px]' /></div>

                          </div>
                           <div className='grid grid-cols-2 mb-10 gap-7 justify-center mt-10 ml-7 '>
                               
                                <div className='mx-auto ' style={{
                          backgroundImage: `url(${WTG})`,
                          backgroundSize: "cover"}}>
                                  <h1 className='text-5xl font-sans'>
                                    What<span className='text-orange-400 underline'>Customer says </span><span className='underline'>About us</span>
                                  </h1>
                                </div>
                                <div>
                                  <p className='font-bold line leading-loose'>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.
Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris 
          
                                  </p>
                                </div>
                          
                        
                              </div>

                          <div className='grid grid-cols-3 gap-y-3 mx-7'>

                            <div className='grid grid-rows-[4fr_1fr] rounded-3xl overflow-hidden'>

                                      <div className='w-[330px] h-[150px]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.
                                      </div>
                                      <div>Joy Kim explorer</div>

                            </div>

                                  
                            <div className='grid grid-rows-[4fr_1fr]'>

                                      <div className='w-[330px] h-[150px]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.
                                      </div>
                                      <div>Joy Kim explorer</div>

                            </div>

                            
                            <div className='grid grid-rows-[4fr_1fr]'>

                                      <div className='w-[330px] h-[150px]'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.
                                      </div>
                                      <div>Joy Kim explorer</div>

                            </div>

                             <div>
                              
                            </div>
                             <div>
                              
                            </div>

                          </div>
          </div>
  )
}

export default AboutUs