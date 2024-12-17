import React from 'react'
import { motion } from "motion/react"

export default function Hero() {
    const data = {
        title: "Van Harvey Coca",
        description: "Student - Philippines",
        subdescription: "Aspiring Software Developer",
        
    }
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl text-blue-500 font-bold">{data.title}</h1>
            <p className="text-lg">{data.description}</p>
            <p className="text-sm">{data.subdescription}</p>
        </div>
    )
}