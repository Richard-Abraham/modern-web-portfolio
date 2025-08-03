"use client"

import React, { useState, useEffect } from "react"
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiSupabase, SiGit, SiFirebase, SiGithub,
  SiTailwindcss, SiMongodb, SiPostgresql, SiRedux
} from "react-icons/si"

const skillsData = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "GitHub", icon: SiGithub, color: "#181717" }
]

export function Skills() {
  return (
    <section
      id="skills"
      className="section-container"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white font-poppins text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="glass-card p-6 flex flex-col items-center justify-center gap-3 relative group"
                style={{
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d"
                }}
              >
                <Icon
                  className="w-14 h-14 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-lg text-gray-900 dark:text-white font-medium font-poppins text-center">
                  {skill.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
