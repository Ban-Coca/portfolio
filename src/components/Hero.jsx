import React from 'react'
import { motion } from "motion/react"
import { BackgroundBeams } from './ui/background-beams'
import { AnimatedText } from './AnimatedText'

export default function Hero() {
    const data = {
        title: "Van Harvey Coca",
        description: "I'm an ambitious student from Cebu, Philippines. Currently honing skills across a diverse technological landscape, I demonstrates proficiency in React.js, Spring Boot Java, Android Java, Django, HTML, CSS, and Tailwind CSS.",
        subdescription: "As a young tech enthusiast, I actively develop my full stack development capabilities. My technical versatility is complemented by strong leadership potential and a passionate commitment to learning. Aspiring to become a professional software developer I continuously expand my knowledge and prepare to make meaningful contributions to the technology industry.",
        
    }
    return (
        <div style={{
            height: "calc(100vh - 80px)"
            }}
            className="w-full flex justify-center py-20 p-2 mix-blend-difference ">
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-8xl text-blue-500 font-bold">
                    <AnimatedText text={data.title}/>
                </h1>
                
                <div className="mt-6 text-sm sm:flex sm:gap-4 justify-between items-center">
                    <p className="w-80 h-32 mb-3 sm:mb-0 text-left">
                        <AnimatedText text={data.description} />
                    </p>
                    <p className="w-80 h-32 text-left">
                        <AnimatedText text={data.subdescription} />
                    </p>
                </div>
            </div>    
            
        </div>
    )
}