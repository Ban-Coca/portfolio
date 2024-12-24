import { useScroll, motion, useInView } from "motion/react"
import { tech } from "../data.js"
import { useRef } from "react"
import { HoverEffect } from "./ui/card-hover-effect.jsx"
export default function Technologies(){
    const techs = tech
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false, amount: 0.5})
    const wordRevealVariants = {
        initial: {
          opacity: 0,
          y: 10,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.05,
            duration: 0.5,
            ease: "easeOut",
          },
        }),
      };      
    return(
        <motion.div
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={wordRevealVariants}
            className="flex justify-center items-center h-full flex-col mt-4 mb-2 p-8">
                 <h1 className="font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem]">
                    Technologies
                </h1>
                <HoverEffect items={techs}/>
        </motion.div>
    )
}