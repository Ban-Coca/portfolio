import { useScroll, motion } from "motion/react"
import { tech } from "../data.js"
import { useRef } from "react"
import { HoverEffect } from "./ui/card-hover-effect.jsx"
export default function Technologies(){
    const techs = tech
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end", "end end"]
    })

    // const MyTech = () => {
    //     return (
    //         <div className="flex gap-4 flex-wrap justify-center ">
    //             {techs.map(({id, name, logo}) =>(
    //                 <div className="flex w-64 h-24 justify-between items-center bg-secondaryBackground rounded-md p-4" key={id}>
    //                     <div className=" p-2 roun">
    //                         <img src={logo} alt={name} className="w-8 h-8"/>
    //                     </div>
    //                     <div className="text-xl text-black font-sans">
    //                         {name}
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //     )
    // }

    return(
        <motion.div
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
                // height: "calc(100vh)"

            }}
            className="flex justify-center items-center h-full flex-col mt-4 mb-2 p-8">
                 <h1 className="font-bold text-5xl my-6 p-6">
                    Techonologies
                </h1>
                {/*<MyTech/> */}
                <HoverEffect items={techs}/>
        </motion.div>
    )
}