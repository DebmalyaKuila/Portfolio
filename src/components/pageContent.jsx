import React from 'react'

import Hero from './Hero'
import About from './About'
import Skills from './Skills'
const PageContent = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Hero />
      <About />
      <Skills/>
    </div>
  )
}

export default PageContent
