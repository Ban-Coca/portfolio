"use client";

import FacebookIcon from "../components/ui/facebook-icon";
import { Github } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <div className="grid grid-cols-8 grid-rows-12 gap-5 w-full max-w-7xl p-8">
        <div className="col-span-8 text-6xl md:text-8xl flex justify-start items-start font-bold text-foreground">
          Van Harvey Coca
        </div>

        <div className="col-span-2 row-span-2 row-start-2 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            Pictyre
          </span>
        </div>

        <div className="col-span-5 row-span-3 col-start-4 row-start-2 bg-card/90 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex flex-col items-start p-8 gap-6">
          <span className="text-card-foreground text-4xl font-medium">
            About Me
          </span>
          <div className="text-card-foreground text-lg font-medium">
            Hi, I'm Van Harvey Coca, a Information Technology student passionate about building scalable web applications from front-end to cloud infrastructure. I work across the full technology stack - creating user interfaces with ReactJS, building APIs with Spring Boot, and deploying applications on Azure with CI/CD pipelines through Github Actions.
          </div>
        </div>

        <div className="col-span-2 col-start-1 row-start-4 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            Skills
          </span>
        </div>

        <div className="col-span-8 row-span-3 col-start-1 row-start-5 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            Projects
          </span>
        </div>

        <div className="col-span-8 row-span-4 col-start-1 row-start-8 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            Experience & Timeline
          </span>
        </div>

        <div className="col-span-8 col-start-1 row-start-12 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <div className="flex ">
            <Link href="https://www.facebook.com/RipVanHarvey/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="w-6 h-6 mr-2 text-foreground" />
            </Link>
            <Link href="https://github.com/Ban-Coca" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-6 h-6 mr-2 text-foreground" />
            </Link>
            <Link href="https://www.linkedin.com/in/harvey-coca-007553327/" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="w-6 h-6 mr-2 text-foreground" />
            </Link>
          </div>
          <div>E-mail: harveycoca0219@gmail.com</div>
        </div>

        <div className="row-span-3 col-start-3 row-start-2 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            links
          </span>
        </div>
      </div>
    </div>
  );
}
