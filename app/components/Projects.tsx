"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Vikapu Website",
    description:
      "A modern website application for an academy, featuring course management and student interactions.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Richard-Abraham/vikapuwebsite-main",
    demo: "https://vikapuwebsite-main-richard-abrahams-projects.vercel.app",
    image: "/images/vikapu.png",
  },
  {
    title: "CarePoint",
    description:
      "An adult home and homecare management hub, digitizing workflow and job allocation — from payments and staff management to recipient tracking.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "",
    demo: "https://dev-caramanagement.digisrupt.co.ke/",
    image: "/images/carepoint.png",
  },
  {
    title: "Nobuk",
    description:
      "A collection platform for communities, enabling transparent financial management with M-Pesa and WhatsApp integration.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "",
    demo: "https://dazzling-tarsier-8456b4.netlify.app/nobuk_1",
    image: "/images/Nobuk.png",
  },
  {
    title: "Sales Lead Generator",
    description:
      "A lead generator that searches by business name (e.g. property management) and location (e.g. Nairobi) using the Google Places API, eliminating manual research.",
    tech: ["PHP", "Laravel", "JavaScript", "Google Places API"],
    github: "",
    demo: "https://sales-lead-tool.netlify.app/",
    image: "/images/saleslead.png",
  },
  {
    title: "Caresoko",
    description:
      "An agency platform for homecare providers and adult homes, streamlining care operations and client management.",
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
    github: "",
    demo: "http://app.caresoko.com/#/welcomeScreen",
    image: "/images/caresoko.png",
  },
]

export function Projects() {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})

  const handleImageError = (title: string) => {
    setImageError((prev) => ({ ...prev, [title]: true }))
  }

  return (
    <motion.section
      id="projects"
      className="section-container w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-poppins text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto mb-12 sm:mb-16 font-geist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A selection of projects I&apos;ve built, from concept to deployment
        </motion.p>
        <div className="space-y-16 sm:space-y-24 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center w-full`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 group">
                    {!imageError[project.title] ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        onError={() => handleImageError(project.title)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                        <Code2 className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-3" />
                        <span className="text-lg font-medium text-gray-500 dark:text-gray-400 font-poppins">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-geist leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-geist border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="relative overflow-hidden group hover:border-blue-500 transition-colors font-geist"
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                          <span className="relative">
                            <span className="group-hover:opacity-0 transition-opacity">
                              Code
                            </span>
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              View Source
                            </span>
                          </span>
                        </Link>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      asChild
                      className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 font-geist"
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                        <span className="relative">
                          <span className="group-hover:opacity-0 transition-opacity">
                            Live Demo
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            Visit Site
                          </span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
