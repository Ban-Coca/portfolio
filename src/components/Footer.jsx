import { useScroll, motion, useInView } from "motion/react"
import TypingAnimation from "./ui/typing-animation"
import { useRef } from "react"
import { Github, Facebook, Linkedin, Download  } from 'lucide-react';
import { Button } from "./ui/button";
export default function Footer() {
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
            className="h-screen flex flex-col "
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={wordRevealVariants}
        >
            <div className="h-2/3 flex flex-col items-center justify-center">
                <TypingAnimation className="text-7xl" startOnView="true">Let's talk and collaborate</TypingAnimation>
                <p className="text-zinc-400 mt-4">
                    Open for exciting opportunities and collaborations
                </p>
            </div>
            <div className="h-2/6 bg-black flex flex-row-reverse items-center p-8">
                <div className="">
                    <h1 className="text-3xl">harveycoca0219@gmail.com</h1>
                    <div className="text-2xl flex flex-row-reverse mt-2 gap-2">
                        <Button className="bg-zinc-900 text-white w-24 p-1 rounded-md text-sm transition-all duration-300  hover:bg-white hover:text-zinc-900"><Download/> Resume</Button>
                        <a href="https://github.com/Ban-Coca" target="_blank" rel="noopener noreferrer">
                            <Github size={32} className="hover:text-zinc-200" />
                        </a>
                        <a href="https://www.facebook.com/RipVanHarvey/" target="_blank" rel="noopener noreferrer">
                            <Facebook size={32} className="hover:text-zinc-200"/>
                        </a>
                        
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}