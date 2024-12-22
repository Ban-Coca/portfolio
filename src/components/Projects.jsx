import { projects } from "@/data"
import { motion } from "motion/react"
import { MagicCard } from "./ui/magic-card"
import Marquee from "./ui/marquee"
import { Github } from 'lucide-react'; 
export default function Projects(){
    const ProjectsCards = () => {
        return(
            <div className="flex justify-center items-center gap-6 mt-5 px-6">
                {projects.map((project) => (
                    <MagicCard key={project.id} className="h-96 w-96 bg-black">
                        <div className="p-4 flex flex-col justify-center gap-2">
                            <div className="flex justify-center">
                                <img 
                                    src={project.src}
                                    // height={200}
                                    // width={250}
                                    className="object-contain"
                                    />
                            </div>

                            <div>
                               <h1 className="font-bold text-2xl text-white">
                                {project.title}
                                </h1>
                                <p className="text-sm text-zinc-200">
                                    {project.description}
                                </p> 
                            </div>

                            <div className="flex flex-wrap items-start gap-1">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="h-auto w-auto border border-white p-1 rounded-md">
                                        <p className="text-sm text-zinc-200">{tech}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                >
                                    <span className="flex justify-center items-center gap-1 bg-zinc-900 text-white w-24 p-1 rounded-md text-sm transition-all duration-300  hover:bg-white hover:text-zinc-900 "> 
                                        <Github/>
                                        Source
                                    </span>
                                </a>
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
            <h1 className="font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem]">
                Projects
            </h1>
            <Marquee pauseOnHover className="[--duration:20s]">
                <ProjectsCards className=""/>
            </Marquee>
            
        </motion.div>
    )
}