import React from 'react'
import {
    BookOutlined,
    VideoCameraOutlined,
    CarOutlined,
    CameraOutlined
  } from "@ant-design/icons"
  import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center py-8' id="about">
      <h2 className='text-2xl lg:text-4xl mb-8'>ABOUT <span style={{color:"#ffb349"}}>ME</span></h2>
      <motion.div 
      initial={{x:+100 ,opacity:0}} 
      whileInView={{x:0 ,opacity:1}} 
      transition={{duration:0.5 ,delay:0}}
      className='w-10/12 lg:w-8/12 text-lg sm:text-base'>I'm Debmalya Kuila , a 4th year electronics and communication (ECE) engineering student of National Institute of Technology(NIT),Arunachal Ptadesh . I am a dedicatedand  passionate Full Stack Developer specializing in the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack. With a solid foundation in computer science and years of hands-on experience, I thrive on turning ideas into powerful software solutions. My journey began with a designing intuitive and responsive frontend interfaces , complemented by fascination for building backend systems .
      <br/>
      Beyond coding, I am dedicated to continuous learning and staying updated with the latest industry trends and best practices . My goal is to not only meet but exceed expectations by delivering clean , maintainable code that powers exceptional user experiences . Whether collaborating with teams or independently tackling challenges , I approach every project with enthusiasm and a commitment to excellence. </motion.div>
      <motion.h2 
      initial={{x:-100 ,opacity:0}} 
      whileInView={{x:0 ,opacity:1}} 
      transition={{duration:0.5 ,delay:0}}
      className='text-lg lg:text-xl my-8'>My Intrests</motion.h2>
      <motion.div
       initial={{x:-100 ,opacity:0}} 
       whileInView={{x:0 ,opacity:1}} 
       transition={{duration:0.5 ,delay:0}}
      className='w-10/12 flex flex-row justify-evenly flex-wrap' >
        <div className=' flex flex-col items-center p-4 my-4 md:my-2'>
            <BookOutlined className='text-xl md:text-3xl ' style={{color:"#ffb349"}}/>
            <span className=' font-thin lg:text-lg'>Reading</span>
        </div>
        <div className=' flex flex-col items-center p-4 my-4 md:my-2'>
            <CameraOutlined className='text-xl md:text-3xl ' style={{color:"#ffb349"}}/>
            <span className=' font-thin lg:text-lg'>Photography</span>
        </div>
        <div className=' flex flex-col items-center p-4 my-4 md:my-2'>
            <CarOutlined className='text-xl md:text-3xl ' style={{color:"#ffb349"}}/>
            <span className=' font-thin lg:text-lg'>Travelling</span>
        </div>
        <div className=' flex flex-col items-center p-4 my-4 md:my-2'>
            <VideoCameraOutlined className='text-xl md:text-3xl ' style={{color:"#ffb349"}}/>
            <span className=' font-thin lg:text-lg'>Movie</span>
        </div>
      </motion.div>
    </div>
  )
}

export default About
