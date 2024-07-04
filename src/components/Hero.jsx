import React from 'react'
import { motion } from "framer-motion"

import profilePic from "../assets/images/profilePic.jpg"
const Hero = () => {
  return (
    <div className=' w-full lg:min-h-full flex items-center flex-wrap px-8 lg:px-28 mb-8' id="home">
      <div className='w-full lg:w-1/2 lg:p-10'>
      <div className='flex justify-center items-center'>
        <motion.img 
        initial={{x:-100 ,opacity:0}} 
        whileInView={{x:0 ,opacity:1}} 
        transition={{duration:0.5 ,delay:1.25}}
        src={profilePic} alt='Debmalya Kuila' 
        style={{borderRadius:"50%" ,border:"2px solid #ffb349"}} 
        className='profilePic'/>
      </div>
      </div>
      <div className='w-full lg:w-1/2 '>
        <div className='flex flex-col items-center lg:items-start'>
          <motion.h1 
          initial={{x:+100 ,opacity:0}} 
          whileInView={{x:0 ,opacity:1}} 
          transition={{duration:0.5 ,delay:0}}
          className='text-3xl font-semibold lg:text-6xl'>Debmalya Kuila</motion.h1>
          <motion.p 
          initial={{x:+100 ,opacity:0}} 
          whileInView={{x:0 ,opacity:1}} 
          transition={{duration:0.5 ,delay:0.5}}
          className='text-xl font-thin py-4 lg:text-3xl bg-gradient-to-r from-orange-300 via-slate-200 to-orange-500 bg-clip-text text-transparent'>Full stack Developer</motion.p>
          <motion.p 
          initial={{x:+100 ,opacity:0}} 
          whileInView={{x:0 ,opacity:1}} 
          transition={{duration:0.5 ,delay:1}}
          className='tracking-tighter py-6 text-lg sm:text-base'>I am a passionate full stack MERN developer with a knack of crafting seamless digital experiences from frontend to backend development . I have honed my skills in front-end technologies like ReactJS and Tailwind CSS , backend technologies like NodeJS and ExpressJS , caching services like Redis and data management and storage using MongoDB and MySQL .
            <br/>
          Beside that, I am also a dedicated C++ programmer with a deep passion for problem solving with a strong foundation in object-oriented programming principles and application of data structures and algorithms . Whether I'm optimizing algorithms for performance, designing scalable systems, or diving into low-level memory management, I thrive on the intricacies of the language whether it's C++ , Python or JavaScript .
          </motion.p>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
