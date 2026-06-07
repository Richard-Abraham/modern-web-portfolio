"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Layout, Server, Database, Wrench } from "lucide-react"
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiSupabase, SiGit, SiFirebase, SiGithub,
  SiTailwindcss, SiMongodb, SiPostgresql, SiRedux
} from "react-icons/si"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface Category {
  name: string
  icon: React.ComponentType<{ className?: string }>
  skills: Skill[]
}

const categories: Category[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    name: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend & BaaS",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white font-poppins text-center"
          variants={categoryVariants}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto mb-12 sm:mb-16 font-geist"
          variants={categoryVariants}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {categories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.name}
                variants={categoryVariants}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <CategoryIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white font-poppins text-sm">
                    {category.name}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 group cursor-default"
                    >
                      <span style={{ color: skill.color }} className="inline-flex">
                      <skill.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 font-geist text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
