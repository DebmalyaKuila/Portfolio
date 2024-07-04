import React from 'react'
import { Button, Image } from "antd"

import Shopzee from "../assets/images/project images/shopzee/shopzee_home.png"
import CRM from "../assets/images/project images/CRM ticket system/dashboard.png"
import TMApp from "../assets/images/project images/Task-mangement-api/TM_API.png"
const Projects = () => {
  return (
    <div className='w-10/12 m-auto' id="projects">
      <h2 className='text-center font-semibold text-2xl lg:text-4xl my-10'>Projects</h2>
      <div className='flex flex-col m-auto items-center '>


        <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
          <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
            <Image src={Shopzee} alt="Shopzee" />
          </div>
          <div className='w-full lg:w-3/4 '>
            <h3 className='text-xl lg:text-2xl'>Shopzee- an ecommerce website</h3>
            <p className='text-lg lg:text-xl'>Frontend Project</p>
            <p>This project involves developing an eCommerce website frontend using Vite for rapid development, ReactJS for dynamic UI rendering, Tailwind CSS for streamlined styling, and Ant Design for rich UI components. The website also features product listings with categories and filters, a cart system for managing purchases and integration with a backend API for data retrieval using fakestore API and dummyJSOn API.
              <br />
              Additionally, an admin panel is also built using ReactJS and Ant Design to facilitate management tasks such as product inventory, order processing and user administration. The admin dashboard will support CRUD operations, ensuring seamless control over products, orders, and user accounts. Emphasis will be placed on performance optimization, utilizing Vite's fast build capabilities and Tailwind CSS utilities to ensure a rich user experience.</p>
            <div className='mt-6 flex flex-wrap'>
              {
                ["Tailwind CSS", "Vite", "ReactJS", "Ant Design"].map(
                  (tech, index) => {
                    return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                  }
                )
              }
            </div>
            <div className='pt-4 w-full'>
              <Button type='Link' href='https://shopzee2002.netlify.app/' target="_blank" className='bg-orange-500 text-white mr-6'>Visit website</Button>
              <Button type='Link' href='https://github.com/DebmalyaKuila/Shopzee' target="_blank" className='bg-orange-500 text-white'>source Code</Button>
            </div>
          </div>
        </div>




        <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
          <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
            <Image src={CRM} alt="CRM Ticketing System" />
          </div>
          <div className='w-full lg:w-3/4 '>
            <h3 className='text-xl lg:text-2xl'>CRM Ticketing System</h3>
            <p className='text-lg lg:text-xl'>Full Stack Project</p>
            <p>This project involves developing a robust CRM ticketing system using the MERN stack to streamline customer support operations. This system will allow users to create, manage and track tickets efficiently.The Key features of this project include user authentication with role-based access control (RBAC), intuitive dashboards for monitoring ticket status and performance metrics, and integration capabilities with external APIs for enhanced functionality.
              <br/>
              The frontend, built with ReactJS and Vite will provide a user-friendly interface. MongoDB will store ticket and user data, while Node.js will handle backend logic and API interactions. Agile methodologies will guide development, ensuring iterative improvements in performance and code maintainability.</p>
            <div className='mt-6 flex flex-wrap'>
              {
                ["Tailwind CSS", "ReactJS", "Ant Design", "NodeJS", "Redis", "Mongoose", "MongoDB"].map(
                  (tech, index) => {
                    return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                  }
                )
              }
            </div>
            <div className='pt-4 w-full'>
              <Button type='Link' href='https://github.com/DebmalyaKuila/CRM_Ticket-System' target="_blank" className='bg-orange-500 text-white'>source Code</Button>
            </div>
          </div>
        </div>


        <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
          <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
            <Image src={TMApp} alt="Shopzee" />
          </div>
          <div className='w-full lg:w-3/4 '>
            <h3 className='text-xl lg:text-2xl'>Task Management API</h3>
            <p className='text-lg lg:text-xl'>Backend Project</p>
            <p>Built a RestFul API using NodeJS and ExpressJS to perform backend functionalities of a Task Management App. It's capable of performing CRUD operation on users and the tasks created by users making management of data more streamline.This API also has several functionsalities such as data validation and sanitization , data filtering , user authentication , user based operation execution , etc . </p>
            <div className='mt-6 flex flex-wrap'>
              {
                ["NodeJS", "Mongoose", "MongoDB", "Joi"].map(
                  (tech, index) => {
                    return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                  }
                )
              }
            </div>
            <div className='pt-4 w-full'>
              <Button type='Link' href='https://github.com/DebmalyaKuila/task-manager-api' target="_blank" className='bg-orange-500 text-white'>source Code</Button>
            </div>
          </div>
        </div>









      </div>
    </div>
  )
}

export default Projects
