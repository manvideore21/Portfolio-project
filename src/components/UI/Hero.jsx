import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'

const Hero = () => {
    return(
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flew-col md:flex-row'>
                    {/* ========== hero left content ========= */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[16px]'>
                            Hello Welcome
                        </h5>
                        <h1
                            data-aos='fade-up'
                            data-aos-duration='1500'
                            className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>
                                I'm Manvi Deore <br />
                                Web Developer | Data Analist
                        </h1>

                        <div 
                            data-aos='fade-up'
                            data-aos-duration='1800'
                            data-aos-delay='200'
                            className='flex items-center gap-6 mt-7'>
                                <a href="#contact">
                                    <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                        <i class='ri-mail-line'></i> 
                                        Hire Me
                                    </button>
                                </a>
                                <a href="#portfolio" 
                                    className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                                    see Portfolio
                                </a>

                        </div>
                        <p 
                                    data-aos='fade-left'
                                    data-aos-duration='1500'
                                    className='flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 
                                    sm:pl-14 sm:pr-10'
                                >
                                        <span><i class='ri-apps-2-line'></i></span>
                                        Something about you that you dont want anyone to know Something about you that you dont want anyone to know
                                        Something about you that you dont want anyone to know.....
                        </p>

                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>
                                Follow me:
                            </span>

                            <span>
                                <a href='https://www.linkedin.com/in/manvi-deore-119112212/' className='text-smallTextColo text-[18px] font-[600]'>
                                <i class="ri-linkedin-fill"></i>
                                </a>
                            </span>

                            <span>
                                <a href='https://instagram.com/_manvideore_?igshid=MmU2YjMzNjRlOQ==' className='text-smallTextColo text-[18px] font-[600]'>
                                <i class="ri-instagram-line"></i>
                                </a>
                            </span>

                            <span>
                                <a href='https://github.com/manvideore21' className='text-smallTextColo text-[18px] font-[600]'>
                                <i class="ri-github-fill"></i>
                                </a>
                            </span>

                            <span>
                                <a href='#facebook' className='text-smallTextColo text-[18px] font-[600]'>
                                <i class="ri-facebook-fill"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* ========== hero left end ========= */}
                    
                    {/* ========== hero img ========= */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img src={heroImg} alt='' />
                        </figure>
                    </div>
                    {/* ========== hero img end ========= */}
                </div>
            </div>
        </section>
    )
}

export default Hero