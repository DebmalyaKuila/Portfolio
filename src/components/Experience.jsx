import React from 'react'
import {motion} from "framer-motion"

const Experience = () => {
    return (
        <div className='my-8 w-full' id="experience">
            <h2 className='text-center font-semibold text-2xl lg:text-4xl my-10'>Experience</h2>
            <div className='w-10/12 flex flex-col m-auto items-center'>
                <div className='w-full text flex flex-wrap items-start justify-center flex-col lg:flex-row my-8'>
                    <motion.div 
                    initial={{x:-100 ,opacity:0}} 
                    whileInView={{x:0 ,opacity:1}} 
                    transition={{duration:0.5 ,delay:0}}
                    className='w-full lg:w-1/4 lg:text-right pr-20 pb-4 font-semibold'>June , 2024 - Present</motion.div>
                        <motion.div 
                        initial={{x:+100 ,opacity:0}} 
                        whileInView={{x:0 ,opacity:1}} 
                        transition={{duration:0.5 ,delay:0}}
                        className='w-full lg:w-3/4'>
                        <h4 className='font-semibold pb-3'>GSSOC - open source contributor @ Full stack developer</h4>
                        <p>Currently I am working as a open source contributor for projects under GSSOC ' 2024 (GirlScript Summer of Code) in full stack MERN developer role . Some of my my works include re-structuring and re-factoring the existing codebase , implementing user authentication system , fixing bugs related to user login , etc . I collaborate closely with my mentors and fellow developers to enhance the functionality and reliability of project . </p>
                        <br />
                        <div className='mb-8 flex flex-wrap'>
                            {
                                ["ReactJS", "NodeJS", "mongoose", "MongoDB"].map(
                                    (tech ,index )=> {
                                        return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
                    </motion.div>

                    <motion.div 
                    initial={{x:-100 ,opacity:0}} 
                    whileInView={{x:0 ,opacity:1}} 
                    transition={{duration:0.5 ,delay:0}}
                    className='w-full lg:w-1/4 lg:text-right pr-20 pb-4 font-semibold'>July, 2023 - Sept. , 2023 </motion.div>
                        <motion.div 
                        initial={{x:+100 ,opacity:0}} 
                        whileInView={{x:0 ,opacity:1}} 
                        transition={{duration:0.5 ,delay:0}}
                        className='w-full lg:w-3/4'>
                        <h4 className='font-semibold pb-3'>Laxaar - ReactJS Developer Intern</h4>
                        <p>Guring my internship period in Laxaar as a ReactJS intern , I have used ReactJS and Ant Design component library to create an employees Section for an internal management system of the company. Later , I also created an API endpoint to manage all the employee details using sequelize with validations and data sanitization while keeping API secity in mind . I also fixed bugs in the existing sytem and made some UI changes . I got to know the importance and practical application of automation during development phase in this project .
                        <br/>
                        I also worked as a mobile app developer using React Expo where I worked on some complicated features related to deeplinking , splash screen , integration of google analytics for efficent customer tracking , product link sharing using social media platforms , etc .
                        </p>
                        <br />
                        <div className='mb-8 flex flex-wrap'>
                            {
                                ["ReactJS", "Ant Design", "Sequelize", "MySQL","React Expo"].map(
                                   ( tech,index ) => {
                                        return (<span key={index} className='mr-4 p-2 font-medium bg-stone-700 text-amber-300 rounded my-2'>{tech}</span>)
                                    }
                                )
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience
