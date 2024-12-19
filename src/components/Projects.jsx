import { projects } from "@/data"
import { motion } from "motion/react"
import { AnimatedTestimonials } from "./ui/animated-testimonials"
export default function Projects(){

    return(
        <motion.div
            style={{
                height: "calc(100vh - 80px)"
            }}>
            <h1 className="font-bold text-5xl my-6 p-6">
                Projects
            </h1>
            <AnimatedTestimonials testimonials={projects}/>
        </motion.div>
    )
}