import React from 'react'

import Hero from './Hero'
import About from './About'
const PageContent = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Hero />
      <About />
    </div>
  )
}

export default PageContent
