import React from 'react'
import { Layout } from 'antd'; 
const {Footer } = Layout; 
const PageFooter = () => {
  return (
    <>
      <Footer className='w-full h-1/12'>
        <h4 className='font-medium text-lg text-center'>Created by Debmalya Kuila &#64; {new Date().getFullYear()}
            </h4>
        </Footer>
    </>
  )
}

export default PageFooter
