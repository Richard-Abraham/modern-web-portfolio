"use client"

import { motion } from "framer-motion"
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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.05
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.section
      id="skills"
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
          Technical Skills
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="glass-card p-4 sm:p-6 flex flex-col items-center justify-center gap-3 relative group"
              style={{
                transformOrigin: "center center",
                transformStyle: "preserve-3d"
              }}
            >
              <skill.icon 
                className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
              <span className="text-sm sm:text-base text-gray-900 dark:text-white font-medium font-geist-sans text-center">
                {skill.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
} 