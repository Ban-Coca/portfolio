import { useLenis } from "@studio-freight/react-lenis";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
    const lenis = useLenis()
    const links = [
        {
            id: 1,
            name: "Projects",
            link: "#project"
        },
        {
            id: 2,
            name: "Contact",
            link: "#contact"
        }
    ]
    
    const Links = () =>{
        return(
            <ul className="md:flex gap-x-6 text-sm font-semibold">
                {links.map(({id, name, link}) => (
                    <li onClick={()=>lenis.scrollTo(link)} key={id}>
                        <Link href="">
                            <p>{name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        )
        
    }

    return (
        <div className="w-full h-20 text-white px-5">
            <div className="container mx-auto p-2 h-full">
                <div className="flex justify-between items-center h-full">
                    <h1 className="font-bold font-sans">
                        VC
                    </h1>
                    <MenuIcon className="md:hidden"/>
                    <Links/>
                </div>
            </div>
        </div>
    )
}