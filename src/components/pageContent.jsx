import React from 'react'

import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

import PageFooter from './PageFooter'


const PageContent = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Hero />
      <About />
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <PageFooter/>
    </div>
  )
}

export default PageContent
