"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FacebookIcon from "../components/ui/facebook-icon";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Proportions } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import data from "@/data/data.json";

type TechItem = {
  id: number;
  name: string;
  logo: string;
  link: string;
};

type ProjectItem = {
  id: number;
  title: string;
  technologies: string[];
  description: string;
  githubLink: string;
  src: string;
};

const tech: TechItem[] = data.tech;
const projects: ProjectItem[] = data.projects;

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
          <span className="text-card-foreground text-5xl font-medium">
            About Me
          </span>
          <div className="text-card-foreground text-lg font-medium">
            Hi, I'm Van Harvey Coca, a Information Technology student passionate
            about building scalable web applications from front-end to cloud
            infrastructure. I work across the full technology stack - creating
            user interfaces with ReactJS, building APIs with Spring Boot, and
            deploying applications on Azure with CI/CD pipelines through Github
            Actions.
          </div>
        </div>

        <div className="col-span-2 col-start-1 row-start-4 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center gap-4">
          {tech.map((item) => (
            <Link key={item.id} href={item.link} target="_blank">
              <Image src={item.logo} alt={item.name} height={24} width={24} />
            </Link>
          ))}
        </div>

        <div className="col-span-8 row-span-4 col-start-1 row-start-5 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex flex-col items-center justify-center p-8 gap-4">
          <div className="text-5xl w-full text-left">Projects</div>
          <Carousel
            className=""
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {projects.map((projects) => (
                <CarouselItem key={projects.id}>
                  <div className="p-2">
                    <Card className="rounded-2xl flex flex-row">
                      <CardHeader className="flex flex-1 items-center justify-center">
                        <div className="flex flex-col items-start justify-start">
                          <CardTitle className="text-4xl mb-0">
                            {projects.title}
                          </CardTitle>
                          <CardDescription className="mt-0">
                            {projects.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {projects.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-2xl hover:bg-foreground hover:text-background"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={projects.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-background text-primary rounded-2xl hover:bg-foreground hover:text-black transition-colors border border-primary"
                          >
                            <GitHubLogoIcon className="w-4 h-4" />
                            View on GitHub
                          </Link>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 relative w-48 h-128">
                        <Image
                          src={projects.src}
                          alt={projects.description}
                          fill
                          objectFit="contain"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="col-span-8 row-span-3 col-start-1 rowr-start-9 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <span className="text-card-foreground/80 text-lg font-medium">
            Experience & Timeline
          </span>
        </div>

        <div className="col-span-8 col-start-1 row-start-12 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <div>harveycoca0219@gmail.com</div>
        </div>

        <div className="row-span-3 col-start-3 row-start-2 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl hover:bg-card/50 transition-all duration-300 flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <Link
              href="https://github.com/Ban-Coca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInLogoIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
