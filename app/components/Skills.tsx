"use client"

import { motion } from "framer-motion"
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiSupabase, SiGit, SiFirebase, SiGithub 
} from "react-icons/si"

const skillsData = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "GitHub", icon: SiGithub, color: "#181717" }
]

export function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: Math.random() * 1000 - 500, // Random position off-screen
      y: Math.random() * 1000 - 500,
      rotate: Math.random() * 360,
      scale: 0
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.section
      id="skills"
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Skills</h2>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover="hover"
            className="glass-card p-8 flex flex-col items-center justify-center gap-6 relative"
            style={{
              transformOrigin: "center center",
              transformStyle: "preserve-3d"
            }}
          >
            <skill.icon size={60} style={{ color: skill.color }} />
            <span className="text-xl text-gray-900 dark:text-white font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
} 