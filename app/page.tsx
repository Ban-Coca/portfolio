"use client"

import React from "react"
import { motion } from "motion/react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import FacebookIcon from "../components/ui/facebook-icon"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import data from "@/data/data.json"

type TechItem = {
  id: number
  name: string
  logo: string
  link: string
}

type ProjectItem = {
  id: number
  title: string
  technologies: string[]
  description: string
  githubLink: string
  src: string
}

const tech: TechItem[] = data.tech
const projects: ProjectItem[] = data.projects

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as any

export default function Home() {
  const email = "harveycoca0219@gmail.com"
  const [copied, setCopied] = React.useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // fallback for unsupported environments
      const el = document.createElement("textarea")
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-3">
        {/* Header with Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center py-2"
        >
          <header className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Van Harvey Coca
          </header>
          <ThemeToggle />
        </motion.div>

        {/* Hero Section - Bento Grid */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 h-auto md:h-[320px]"
        >
          {/* Profile Image */}
          <motion.div 
            className="md:col-span-3 bg-card rounded-xl border border-border shadow-sm overflow-hidden h-56 md:h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center p-4">
              <motion.div 
                className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 mix-blend-overlay"
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                <Image
                  src="/myPic.png"
                  alt="Van Harvey Coca"
                  fill
                  style={{ objectFit: "cover" }}
                  className="brightness-90 contrast-110 hover:brightness-100 hover:contrast-100 transition-all duration-500"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Section */}
          <div className="md:col-span-7 bg-card rounded-xl border border-border shadow-sm p-5 md:p-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              About Me
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Hi, I'm Van Harvey Coca, an Information Technology student passionate about building scalable web
              applications from front-end to cloud infrastructure. I work across the full technology stack - creating
              user interfaces with ReactJS, building APIs with Spring Boot, and deploying applications on Azure with
              CI/CD pipelines through Github Actions.
            </p>
            {/* Tech Stack - Integrated */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border">
              {tech.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  className="transition-all hover:scale-110 hover:opacity-100 opacity-70"
                  title={item.name}
                >
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    height={24}
                    width={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 bg-card rounded-xl border border-border shadow-sm p-4 flex md:flex-col items-center justify-center gap-5">
            <Link href="https://github.com/Ban-Coca" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:scale-110">
              <GitHubLogoIcon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/harvey-coca-007553327/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <LinkedInLogoIcon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.facebook.com/RipVanHarvey/" target="_blank" rel="noopener noreferrer" className="group transition-transform hover:scale-110">
              <FacebookIcon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card rounded-xl border border-border shadow-sm p-5 md:p-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Projects</h2>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
            }}
            plugins={[Autoplay({ delay: 5000 })]}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <Card className="border-border">
                    <div className="grid md:grid-cols-2 gap-4">
                      <CardHeader className="space-y-3">
                        <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 w-fit"
                        >
                          <GitHubLogoIcon className="w-4 h-4" />
                          View on GitHub
                        </Link>
                      </CardHeader>

                      <CardContent className="flex items-center justify-center p-4">
                        <div className="relative w-full h-48 md:h-64">
                          <Image
                            src={project.src || "/placeholder.svg"}
                            alt={project.description}
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-lg"
                          />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.section>

        {/* Experience & Timeline */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card rounded-xl border border-border shadow-sm p-5"
        >
          <Tabs defaultValue="education" className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <h2 className="text-xl font-bold text-foreground">Experience</h2>
              <TabsList>
                {/* <TabsTrigger value="work">Work</TabsTrigger> */}
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
            </div>

            {/* <TabsContent value="work" className="space-y-3">
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-3 py-1">
                  <h3 className="font-semibold text-base text-foreground">Frontend Developer - ProjectSync</h3>
                  <p className="text-xs text-muted-foreground mb-1.5">Jan 2024 - Present</p>
                  <ul className="list-disc ml-4 space-y-0.5 text-sm text-muted-foreground">
                    <li>Built responsive React components and improved performance.</li>
                    <li>Integrated CI/CD pipeline and deployed to Azure.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-3 py-1">
                  <h3 className="font-semibold text-base text-foreground">Software Engineer Intern - Gradify</h3>
                  <p className="text-xs text-muted-foreground mb-1.5">Jun 2023 - Dec 2023</p>
                  <ul className="list-disc ml-4 space-y-0.5 text-sm text-muted-foreground">
                    <li>Implemented REST APIs using Spring Boot.</li>
                    <li>Collaborated on database schema and migrations.</li>
                  </ul>
                </div>
              </div>
            </TabsContent> */}

            <TabsContent value="education" className="space-y-3">
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-3 py-1">
                  <h3 className="font-semibold text-base text-foreground">B.S. Information Technology</h3>
                  <p className="text-xs text-muted-foreground mb-1.5">Cebu Institute of Technology - University — 2022 - Present</p>
                  <p className="text-sm text-muted-foreground">
                    Relevant coursework: Web Development, App Developmement, Information Management.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-3 py-1">
                  <h3 className="font-semibold text-base text-foreground">High School Diploma</h3>
                  <p className="text-xs text-muted-foreground">Cebu Institute of Technology - University — 2020 - 2021</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Contact */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-card rounded-xl border border-border shadow-sm p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground mb-3">Let's Connect</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`mailto:${email}`}
              className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email me
            </Link>
            <Button 
              onClick={copyEmail} 
              variant="outline" 
              className="px-6 py-2.5 hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all font-medium"
            >
              {copied ? "✓ Copied!" : "Copy email"}
            </Button>
            <Link
              href="https://docs.google.com/document/d/1_a2LqCExByjWNUYnu8b8j2TisYcSX03G/edit?usp=drive_link&ouid=110029222480371949641&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-foreground text-background rounded-lg hover:opacity-90 transition-all hover:scale-105 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get Resume
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
