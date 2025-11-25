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

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as any

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as any

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as any

const scaleOnHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
} as any

const rotateOnHover = {
  hover: {
    scale: 1.25,
    rotate: 12,
    transition: { duration: 0.3, ease: "easeOut" },
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
    <div className="flex justify-center items-center min-h-screen bg-background p-4">
      <div className="w-full max-w-7xl p-8 space-y-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-foreground"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Van Harvey Coca
          </motion.span>
        </motion.header>

        {/* Hero: picture, about, social */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-8 gap-5"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl flex items-center justify-center group"
          >
            <span className="text-card-foreground/80 text-lg font-medium group-hover:text-card-foreground transition-colors duration-300">
              Picture
            </span>
          </motion.div>

          <motion.main
            whileHover={{ scale: 1.02, rotateX: 2 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-5 bg-card/90 backdrop-blur-md rounded-2xl border border-border shadow-xl flex flex-col items-start p-8 gap-6 group"
          >
            <motion.h2
              className="text-foreground text-5xl font-medium"
            >
              About Me
            </motion.h2>
            <div className="text-card-foreground text-lg font-medium leading-relaxed">
              Hi, I'm Van Harvey Coca, a Information Technology student passionate about building scalable web
              applications from front-end to cloud infrastructure. I work across the full technology stack - creating
              user interfaces with ReactJS, building APIs with Spring Boot, and deploying applications on Azure with
              CI/CD pipelines through Github Actions.
            </div>
          </motion.main>

          <motion.aside
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-1 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl flex items-center justify-center"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={staggerItem}>
                <Link href="https://github.com/Ban-Coca" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={rotateOnHover} whileHover="hover">
                    <GitHubLogoIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link
                  href="https://www.linkedin.com/in/harvey-coca-007553327/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div variants={rotateOnHover} whileHover="hover">
                    <LinkedInLogoIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={staggerItem}>
                <Link href="https://www.facebook.com/RipVanHarvey/" target="_blank" rel="noopener noreferrer">
                  <motion.div variants={rotateOnHover} whileHover="hover">
                    <FacebookIcon className="w-8 h-8 text-card-foreground hover:text-primary transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Tech row */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl p-4"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            {tech.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={{
                  scale: 1.25,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    height={24}
                    width={24}
                    className="hover:brightness-110 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl flex flex-col items-center justify-center p-8 gap-4"
        >
          <motion.div whileHover={{ color: "hsl(var(--primary))" }} className="text-5xl w-full text-left">
            Projects
          </motion.div>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
            }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-2">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Card className="rounded-2xl flex flex-row group">
                        <CardHeader className="flex flex-1 items-center justify-center">
                          <div className="flex flex-col items-start justify-start">
                            <motion.div whileHover={{ color: "hsl(var(--primary))" }}>
                              <CardTitle className="text-4xl mb-0">{project.title}</CardTitle>
                            </motion.div>
                            <CardDescription className="mt-0 group-hover:text-card-foreground transition-colors duration-300">
                              {project.description}
                            </CardDescription>
                            <motion.div
                              variants={staggerContainer}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="flex flex-wrap gap-2 mt-2"
                            >
                              {project.technologies.map((tech, index) => (
                                <motion.span
                                  key={index}
                                  variants={staggerItem}
                                  whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "hsl(var(--foreground))",
                                    color: "hsl(var(--background))",
                                  }}
                                  className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-2xl cursor-default"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-background text-primary rounded-2xl hover:bg-foreground hover:text-black border border-primary"
                              >
                                <motion.div whileHover={{ rotate: 12 }} transition={{ duration: 0.2 }}>
                                  <GitHubLogoIcon className="w-4 h-4" />
                                </motion.div>
                                View on GitHub
                              </Link>
                            </motion.div>
                          </div>
                        </CardHeader>

                        <CardContent className="flex-1 relative w-48 h-96 overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full"
                          >
                            <Image
                              src={project.src || "/placeholder.svg"}
                              alt={project.description}
                              fill
                              style={{ objectFit: "contain" }}
                              className="p-8"
                            />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.section>

        {/* Timeline / Experience */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl p-6"
        >
          <Tabs defaultValue="work" className="w-full h-full">
            <div className="flex items-center justify-between mb-4">
              <motion.div
                whileHover={{ color: "hsl(var(--primary))" }}
                className="text-card-foreground text-lg font-medium"
              >
                Experience & Timeline
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <TabsList>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="work">Work</TabsTrigger>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <TabsTrigger value="education">Education</TabsTrigger>
                  </motion.div>
                </TabsList>
              </motion.div>
            </div>

            <TabsContent value="work" className="text-card-foreground/90">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--card) / 0.3)" }}
                  className="p-4 rounded-xl cursor-default"
                >
                  <motion.div whileHover={{ color: "hsl(var(--primary))" }} className="font-semibold">
                    Frontend Developer - ProjectSync
                  </motion.div>
                  <div className="text-sm text-card-foreground/80">Jan 2024 - Present</div>
                  <ul className="list-disc ml-5 mt-2 text-card-foreground/80">
                    <motion.li whileHover={{ color: "hsl(var(--card-foreground))" }}>
                      Built responsive React components and improved performance.
                    </motion.li>
                    <motion.li whileHover={{ color: "hsl(var(--card-foreground))" }}>
                      Integrated CI/CD pipeline and deployed to Azure.
                    </motion.li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--card) / 0.3)" }}
                  className="p-4 rounded-xl cursor-default"
                >
                  <motion.div whileHover={{ color: "hsl(var(--primary))" }} className="font-semibold">
                    Software Engineer Intern - Gradify
                  </motion.div>
                  <div className="text-sm text-card-foreground/80">Jun 2023 - Dec 2023</div>
                  <ul className="list-disc ml-5 mt-2 text-card-foreground/80">
                    <motion.li whileHover={{ color: "hsl(var(--card-foreground))" }}>
                      Implemented REST APIs using Spring Boot.
                    </motion.li>
                    <motion.li whileHover={{ color: "hsl(var(--card-foreground))" }}>
                      Collaborated on database schema and migrations.
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="education" className="text-card-foreground/90">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--card) / 0.3)" }}
                  className="p-4 rounded-xl cursor-default"
                >
                  <motion.div whileHover={{ color: "hsl(var(--primary))" }} className="font-semibold">
                    B.S. Information Technology
                  </motion.div>
                  <div className="text-sm text-card-foreground/80">University Name — 2021 - Present</div>
                  <motion.div
                    whileHover={{ color: "hsl(var(--card-foreground))" }}
                    className="mt-2 text-card-foreground/80"
                  >
                    Relevant coursework: Web Development, Cloud Computing, Databases.
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--card) / 0.3)" }}
                  className="p-4 rounded-xl cursor-default"
                >
                  <motion.div whileHover={{ color: "hsl(var(--primary))" }} className="font-semibold">
                    High School Diploma
                  </motion.div>
                  <div className="text-sm text-card-foreground/80">Some High School — 2017 - 2021</div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Contact */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl flex items-center justify-center p-6"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              variants={staggerItem}
              whileHover={{ color: "hsl(var(--primary))" }}
              className="text-2xl font-semibold text-card-foreground"
            >
              Contact me
            </motion.div>
            <motion.div
              variants={staggerItem}
              whileHover={{ color: "hsl(var(--card-foreground))" }}
              className="text-card-foreground/80"
            >
              Have a project or question? I'd love to hear from you.
            </motion.div>
            <motion.div variants={staggerItem} className="flex gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`mailto:${email}`}
                  className="inline-flex items-center px-4 py-2 bg-primary text-background rounded-2xl hover:opacity-90"
                >
                  Email me
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={copyEmail} variant="outline" className="bg-transparent">
                  {copied ? "Copied!" : "Copy email"}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
