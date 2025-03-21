"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Ai Text Humanizer",
    description: "An AI tool that summarizes and humanizes text, making content more engaging and natural-sounding.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/Richard-Abraham/CleanTextAPP",
    demo: "https://ai-text-humanizer.netlify.app",
    image: "/images/cleantext.png"
  },
  {
    title: "Prompt Engineer",
    description: "An AI-powered tool that helps you craft and optimize prompts for better AI interactions.",
    tech: ["React", "Node.js", "TypeScript", "OpenAI API"],
    github: "https://github.com/Richard-Abraham/Prompt-Engineer",
    demo: "https://promptengineerapp.netlify.app",
    image: "/images/prompt.png"
  },
  {
    title: "Vikapu Website",
    description: "A modern website application for an academy, featuring course management and student interactions.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Richard-Abraham/vikapuwebsite-main",
    demo: "https://vikapuwebsite-main-richard-abrahams-projects.vercel.app",
    image: "/images/vikapu.png"
  },
  {
    title: "Song Promoter",
    description: "An AI tool that provides data-driven strategies for music promotion and audience engagement.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/Richard-Abraham/song-promo",
    demo: "https://songpromoter.netlify.app",
    image: "/images/song promo.png"
  },
]

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white font-geist-sans text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="space-y-16 sm:space-y-24">
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
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <motion.div 
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl glass-card group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
                
                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-geist-sans">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-geist-sans">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-geist-sans"
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
                      className="relative overflow-hidden group hover:border-blue-500 transition-colors font-geist-sans"
                    >
                      <Link 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
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
                      className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 font-geist-sans"
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
      </div>
    </motion.section>
  )
} 