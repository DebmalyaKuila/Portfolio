import React from 'react'
import profilePic from "../assets/images/profilePic.jpg"
const Hero = () => {
  return (
    <div className=' w-full lg:min-h-full flex items-center flex-wrap px-8 lg:px-28 mb-8' id="home">
      <div className='w-full lg:w-1/2 lg:p-10'>
      <div className='flex justify-center items-center'>
        <img src={profilePic} alt='Debmalya Kuila' style={{borderRadius:"50%" ,border:"2px solid #ffb349"}} className='profilePic'/>
      </div>
      </div>
      <div className='w-full lg:w-1/2 '>
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className='text-3xl font-semibold lg:text-6xl'>Debmalya Kuila</h1>
          <span className='text-xl font-thin py-4 lg:text-3xl bg-gradient-to-r from-orange-300 via-slate-200 to-orange-500 bg-clip-text text-transparent'>Full stack Developer</span>
          <span className='tracking-tighter py-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim molestiae sunt praesentium debitis nisi. Culpa reprehenderit molestias tenetur inventore facilis a voluptatum iste suscipit repellat, tempore, vero, ess fugit ea provident magnam eos esse quibusdam delectus ab sint impedit sapiente sequi? Enim necessitatibus fugit illum, nihil minima illo facilis eius doloremque praesentium quia neque modi? Cumque laboriosam repellat, optio obcaecati asperiores sit reprehenderit quam ex ea reiciendis esse. Accusantium eveniet voluptatibus blanditiis aut rerum porro illo id beatae quisquam inventore, quod saepe non nulla, itaque ullam? Et, optio aliquid fugiat necessitatibus perferendis commodi, tempora magnam ipsum neque quam iusto quibusdam accusamus sequi in, velit nulla sit quia animi pariatur architecto? Ut iure at beatae vitae. Laudantium perferendis nihil amet iste at nemo esaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
