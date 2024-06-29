import React from 'react'
import {
LinkedinFilled,
GithubFilled,
MailFilled
  } from '@ant-design/icons';

import LeetCodeIcon from '../assets/custom-icons/LeetCodeIcon';

const ContactIcons = ({collapsed}) => {
  return (
    <div 
    // className='w-full flex justify-evenly items-center py-8 text-xl'
    className={collapsed?'flex flex-col justify-evenly items-center py-6 text-xl mt-10':'flex justify-evenly items-center py-8 text-xl'}
    >
      <a className='pb-3'  href='https://www.linkedin.com/in/debmalya-kuila/'><LinkedinFilled style={{color:"white"}}/></a>
      <a className='pb-3'href='https://github.com/DebmalyaKuila'><GithubFilled style={{color:"white"}}/></a>
      <a className='pb-3' href='https://leetcode.com/u/Debmalya_Kuila/'><LeetCodeIcon style={{color:"white"}}/></a>
      <a className='pb-3' href='mailto:debmalyakuila2002@gmail.com'><MailFilled style={{color:"white"}}/></a>
    </div>
  )
}

export default ContactIcons