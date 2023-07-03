import React from 'react';
import frontendImg from '../../assets/images/front-end.png'

const Services = () => {
  return (
    <section id='services'>
      <div className='container lg:pt-5'>
        <div className='text-center'>
          <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What do I help</h2>

          <p className='lg:max-w-[900px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
            Something about you that you dont want anyone to know Something about you that you dont want anyone to know
            Something about you that you dont want anyone to know.....
          </p>
        </div>

        <div className='flex flex-col justify-center sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialised text-sm font-semibold'>
              {/* ============= vertical line running through the middle ================ */}
              <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'></div>

              {/* ============= left card ============= */}
              <div className=' mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div
                      data-aos='fade-right'
                      data-aos-duration='1200'
                      className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                      <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                        Freamwork Libraries
                      </h3>

                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                      
                      <div className='flex items-center gap-9 mt-2'>     
                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>ReactJS</b>    
                            </span>

                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>NextJS</b>   
                            </span>    
                        </div>

                        <div className='flex items-center gap-4 mt-1'>     
                            <span>
                                <i class="ri-javascript-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>JavaScript</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>web3</b>   
                            </span>    
                        </div>
                        
                        <div className='flex items-center gap-8 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>Firebase</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>Hardhat</b>   
                            </span>    
                        </div>
                        <div className='flex items-center gap-0.5 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>TailwindCSS</b>    
                            </span>   
                        </div>
                        
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
                {/*need to check*/}
                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2              
                transform -translate-x-1/2 -translate-y-20 flex items-center
                justify-center'>
                    <figure>
                        <img src={frontendImg} /> 
                    </figure>
                </div>
              </div>

                {/* ============= right card ============= */}
                <div className=' mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div
                      data-aos='fade-left'
                      data-aos-duration='1500'
                      className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                      <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                        Freamwork Libraries
                      </h3>

                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                      
                      <div className='flex items-center gap-9 mt-2'>     
                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>ReactJS</b>    
                            </span>

                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>NextJS</b>   
                            </span>    
                        </div>

                        <div className='flex items-center gap-4 mt-1'>     
                            <span>
                                <i class="ri-javascript-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>JavaScript</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>web3</b>   
                            </span>    
                        </div>
                        
                        <div className='flex items-center gap-8 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>Firebase</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>Hardhat</b>   
                            </span>    
                        </div>
                        <div className='flex items-center gap-0.5 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>TailwindCSS</b>    
                            </span>   
                        </div>
                        
                      </p>
                    </div>
                    </div>
                    
                  </div>
                </div>
                {/*need to check*/}
                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2              
                transform -translate-x-1/2 -translate-y-20 flex items-center
                justify-center'>
                    <figure>
                        <img src={frontendImg} /> 
                    </figure>
                </div>
              </div>

              {/* ============= left card ============= */}
              <div className=' mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div
                      data-aos='fade-right'
                      data-aos-duration='1200'
                      className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                      <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                        Freamwork Libraries
                      </h3>

                      <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>
                      
                      <div className='flex items-center gap-9 mt-2'>     
                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>ReactJS</b>    
                            </span>

                            <span>
                                <i class="ri-reactjs-line text-[18px] font-[600]"></i>
                                <b className='p-1'>NextJS</b>   
                            </span>    
                        </div>

                        <div className='flex items-center gap-4 mt-1'>     
                            <span>
                                <i class="ri-javascript-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>JavaScript</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>web3</b>   
                            </span>    
                        </div>
                        
                        <div className='flex items-center gap-8 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>Firebase</b>    
                            </span>

                            <span>
                            <i class="ri-codepen-line text-[18px] font-[600]"></i>
                                <b className='p-1'>Hardhat</b>   
                            </span>    
                        </div>
                        <div className='flex items-center gap-0.5 mt-1'>     
                            <span>
                                <i class="ri-css3-fill text-[18px] font-[600]"></i>
                                <b className='p-1'>TailwindCSS</b>    
                            </span>   
                        </div>
                        
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
                {/*need to check*/}
                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2              
                transform -translate-x-1/2 -translate-y-20 flex items-center
                justify-center'>
                    <figure>
                        <img src={frontendImg} /> 
                    </figure>
                </div>
              </div>
                








            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
