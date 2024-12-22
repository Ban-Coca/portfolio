import { projects } from "@/data"
import { motion } from "motion/react"
import { MagicCard } from "./ui/magic-card"
import Marquee from "./ui/marquee"
export default function Projects(){
    const ProjectsCards = () => {
        return(
            <div className="flex justify-center items-center gap-6 mt-5 px-6">
                {projects.map((project) => (
                    <MagicCard key={project.id} className="h-96 w-96 flex justify-center items-center">
                        <div className="p-4 flex flex-col justify-center items-center gap-8">
                            <div className="">
                                <img 
                                    src={project.src}
                                    className="object-contain"
                                    />
                            </div>

                            <div>
                               <h1 className="text-center font-bold text-2xl">
                                {project.title}
                                </h1>
                                <p className="text-center text-sm">
                                    {project.description}
                                </p> 
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>
        )
    }
    return(
        <motion.div
            style={{
                height: "calc(100vh)",
                
            }}
            className="flex justify-center items-center h-full overflow-hidden flex-col mt-4 mb-2 p-8">
            <h1 className="font-bold text-5xl px-6">
                Projects
            </h1>
            <Marquee pauseOnHover className="[--duration:10s]">
                <ProjectsCards className=""/>
            </Marquee>
            
        </motion.div>
    )
}