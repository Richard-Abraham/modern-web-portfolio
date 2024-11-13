"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with Next.js and TypeScript",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    image: "/images/cleantext.png"
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    image: "/images/prompt.png"
  },
  {
    title: "Project 3",
    description: "A mobile-first progressive web application",
    tech: ["React Native", "Firebase", "Redux"],
    github: "#",
    demo: "#",
    image: "/images/vikapu.png"
  }
]

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Projects</h2>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg glass-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="relative overflow-hidden group hover:border-blue-500 transition-colors"
                  >
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4 group-hover:animate-bounce" />
                      <span className="relative">
                        <span className="group-hover:opacity-0 transition-opacity">Code</span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          View Source
                        </span>
                      </span>
                    </Link>
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90"
                  >
                    <Link 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                      <span className="relative">
                        <span className="group-hover:opacity-0 transition-opacity">Live Demo</span>
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
    </motion.section>
  )
} 