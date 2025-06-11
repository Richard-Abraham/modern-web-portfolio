"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

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
    title: "Nobuk Africa",
    description:
      "A modern website for Nobuk Africa, showcasing their services and mission.",
    tech: ["TypeScript", "Vite", "Tailwind CSS"],
    github: "",
    demo: "https://www1.nobuk.africa",
    image: "/images/Screenshot 2025-06-11 201126.png",
  },
  {
    title: "Ai Text Humanizer",
    description:
      "An AI tool that summarizes and humanizes text, making content more engaging and natural-sounding.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/Richard-Abraham/CleanTextAPP",
    demo: "https://ai-text-humanizer.netlify.app",
    image: "/images/cleantext.png",
  },
  {
    title: "Prompt Engineer",
    description:
      "An AI-powered tool that helps you craft and optimize prompts for better AI interactions.",
    tech: ["React", "Node.js", "TypeScript", "OpenAI API"],
    github: "https://github.com/Richard-Abraham/Prompt-Engineer",
    demo: "https://promptengineerapp.netlify.app",
    image: "/images/prompt.png",
  },
  {
    title: "Song Promoter",
    description:
      "An AI tool that provides data-driven strategies for music promotion and audience engagement.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/Richard-Abraham/song-promo",
    demo: "https://songpromoter.netlify.app",
    image: "/images/song promo.png",
  },
];

export function Projects() {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (title: string) => {
    setImageError((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <motion.section
      id="projects"
      className="section-container w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white font-geist-sans text-center">
          Featured Projects
        </h2>
        <div className="space-y-16 sm:space-y-24 w-full">
          {projects.map((project, index) => (
            <div key={project.title} className="relative w-full">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center w-full`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl glass-card group w-full">
                    {!imageError[project.title] ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        onError={() => handleImageError(project.title)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <span className="text-gray-500 dark:text-gray-400">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-geist-sans">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-geist-sans">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-geist-sans"
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
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
