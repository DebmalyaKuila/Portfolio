import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";

import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";

import { FaGitAlt } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
const Skills = () => {
  return (
    <div className='w-full my-8'>
        <div className='w-10/12 m-auto flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold mb-8 underline text-center'>Technical Skills</h2>

        <div className='flex flex-col items-center my-8'>
            <h3 className='text-3xl font-semibold pb-4'>Front-end</h3>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <FaHtml5 className='text-6xl text-orange-600 bg-white pb-1' />
                    <span>HTML</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <FaCss3Alt className='text-6xl text-sky-600 bg-white pb-1' />
                    <span>CSS</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <IoLogoJavascript className='text-6xl text-yellow-400 pb-1' />
                    <span>JavaScript</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <RiReactjsLine className='text-6xl text-cyan-300 pb-1' />
                    <span>ReactJS</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <RiTailwindCssFill className='text-6xl text-cyan-400 pb-1' />
                    <span>Tailwind CSS</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <SiAntdesign className='text-6xl text-blue-800  pb-1' />
                    <span>Ant Design</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center my-8'>
            <h3 className='text-3xl font-semibold pb-4'>Back-end</h3>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <FaNodeJs className='text-6xl text-green-600 pb-1' />
                    <span>NodeJS</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <DiRedis className='text-6xl text-red-700 pb-1' />
                    <span>Redis</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <BiLogoMongodb className='text-6xl text-green-500 pb-1' />
                    <span>MongoDB</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <TbBrandMysql className='text-6xl text-orange-500 bg-sky-800 pb-1' />
                    <span>MySQL</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center my-8'>
            <h3 className='text-3xl font-semibold pb-4'>Programming</h3>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <TbBrandCpp className='text-6xl text-white bg-blue-700 pb-1' />
                    <span>C/C++</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <FaPython className='text-6xl text-cyan-800 bg-green-950 pb-1' />
                    <span>Python</span>
                </div>
            </div>
        </div>


        <div className='flex flex-col items-center my-8'>
            <h3 className='text-3xl font-semibold pb-4'>Others</h3>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <FaGitAlt className='text-6xl text-orange-600 bg-white pb-1' />
                    <span>Git</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <SiPostman className='text-6xl text-orange-700 pb-1' />
                    <span>Postman</span>
                </div>
                <div className='flex flex-col justify-center items-center bg-inherit mx-8'>
                    <SiSelenium  className='text-6xl text-green-900 bg-white pb-1' />
                    <span>Selenium</span>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Skills
