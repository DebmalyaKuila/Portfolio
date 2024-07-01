import React from 'react'
import {Button,Image} from "antd"

import Shopzee from "../assets/images/project images/shopzee/shopzee_home.png"
const Projects = () => {
  return (
    <div className='w-10/12 m-auto'>
      <h2 className='text-center underline text-2xl lg:text-4xl my-16'>Projects</h2>
      <div  className='flex flex-col m-auto items-center '>


          <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
            <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
              <Image src={Shopzee} alt="Shopzee" />
            </div>
            <div className='w-full lg:w-3/4 '>
              <h3 className='text-xl lg:text-2xl'>Shopzee- an ecommerce website</h3>
              <p className='text-lg lg:text-xl'>Frontend Project</p>
              <p>project description aaaaaaaaaaaaaaaa  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae alias reprehenderit porro sit unde eveniet dolores qui esse sequi fugiat commodi asperiores consequuntur itaque eaque quam, dignissimos cupiditate quasi magni debitis dolorum delectus accusamus quidem minus. Nulla ad deserunt tenetur! Facere quaerat placeat alias accusamus inventore quia possimus id corrupti fugiat est expedita dignissimos praesentium doloribus dolorum voluptatum cumque obcaecati sunt debitis iste, omnis maiores suscipit quod. Odio at praesentium reiciendis, tempora quae ipsam nemo minus hic numquam. Tempore reiciendis distinctio aliquid officiis, quasi facere ab fuga sequi sed quod error ullam, voluptatum odio incidunt provident! Ducimus, fugiat blanditiis! </p>
              <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                    tech => {
                                        return (<span className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
              <div className='pt-4 w-full'>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white mr-6'>Visit website</Button>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white'>source Code</Button>
            </div>
            </div>
          </div>




          <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
            <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
              <Image src={Shopzee} alt="Shopzee" />
            </div>
            <div className='w-full lg:w-3/4 '>
              <h3 className='text-xl lg:text-2xl'>Shopzee- an ecommerce website</h3>
              <p className='text-lg lg:text-xl'>Frontend Project</p>
              <p>project description aaaaaaaaaaaaaaaa  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae alias reprehenderit porro sit unde eveniet dolores qui esse sequi fugiat commodi asperiores consequuntur itaque eaque quam, dignissimos cupiditate quasi magni debitis dolorum delectus accusamus quidem minus. Nulla ad deserunt tenetur! Facere quaerat placeat alias accusamus inventore quia possimus id corrupti fugiat est expedita dignissimos praesentium doloribus dolorum voluptatum cumque obcaecati sunt debitis iste, omnis maiores suscipit quod. Odio at praesentium reiciendis, tempora quae ipsam nemo minus hic numquam. Tempore reiciendis distinctio aliquid officiis, quasi facere ab fuga sequi sed quod error ullam, voluptatum odio incidunt provident! Ducimus, fugiat blanditiis! </p>
              <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                    tech => {
                                        return (<span className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
              <div className='pt-4 w-full'>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white mr-6'>Visit website</Button>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white'>source Code</Button>
            </div>
            </div>
          </div>




          <div className='w-full flex flex-col items-start justify-center md:flex-row my-6'>
            <div className='w-full bg-blue-600 lg:w-1/4 mr-10'>
              <Image src={Shopzee} alt="Shopzee" />
            </div>
            <div className='w-full lg:w-3/4 '>
              <h3 className='text-xl lg:text-2xl'>Shopzee- an ecommerce website</h3>
              <p className='text-lg lg:text-xl'>Frontend Project</p>
              <p>project description aaaaaaaaaaaaaaaa  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae alias reprehenderit porro sit unde eveniet dolores qui esse sequi fugiat commodi asperiores consequuntur itaque eaque quam, dignissimos cupiditate quasi magni debitis dolorum delectus accusamus quidem minus. Nulla ad deserunt tenetur! Facere quaerat placeat alias accusamus inventore quia possimus id corrupti fugiat est expedita dignissimos praesentium doloribus dolorum voluptatum cumque obcaecati sunt debitis iste, omnis maiores suscipit quod. Odio at praesentium reiciendis, tempora quae ipsam nemo minus hic numquam. Tempore reiciendis distinctio aliquid officiis, quasi facere ab fuga sequi sed quod error ullam, voluptatum odio incidunt provident! Ducimus, fugiat blanditiis! </p>
              <div className='mt-6 flex flex-wrap'>
                            {
                                ["ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS", "ReactJS"].map(
                                    tech => {
                                        return (<span className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
              <div className='pt-4 w-full'>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white mr-6'>Visit website</Button>
              <Button type='Link' href='https://www.google.com' className='bg-orange-500 text-white'>source Code</Button>
            </div>
            </div>
          </div>


          

                




      </div>
    </div>
  )
}

export default Projects
