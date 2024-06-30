import React from 'react'
import {
    BookOutlined,
    VideoCameraOutlined,
    CarOutlined,
    CameraOutlined
  } from "@ant-design/icons"

const About = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center py-4 lg:py-8'>
      <h2 className='text-2xl lg:text-4xl mb-8'>ABOUT <span style={{color:"#ffb349"}}>ME</span></h2>
      <div className='w-11/12 lg:w-10/12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia reprehenderit porro nam cum exercitationem saepe voluptas optio magni veniam amet, itaque ullam? Nesciunt quos ad minus odio totam? Facere labore id ducimus enim nulla dolor, minus libero? Illo, animi eos asperiores modi corrupti suscipit similique, doloribus magnam voluptatem aperiam vel maxime debitis totam 
      <br/>
      aliquid dolores laborum reprehenderit quo, blanditiis cumque sapiente? Soluta reprehenderit quibusdam iure, voluptas minima, quidem praesentium vel voluptatum magnam aliquam in ad impedit maiores exercitationem laboriosam. Et dolorum distinctio doloribus, omnis fugit harum ducimus impedit qui numquam minima aliquam, quia accusantium animi magni laudantium dignissimos earum.</div>
      <h2 className='text-lg lg:text-xl mt-8 mb-4'>My Intrests</h2>
      <div className='w-10/12 flex flex-row justify-evenly flex-wrap' >
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
       
      </div>
    </div>
  )
}

export default About
