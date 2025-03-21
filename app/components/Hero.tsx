"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from 'lucide-react'
import { Button } from "./ui/button"
import Link from "next/link"
import { ParticleBackground } from "./ParticleBackground"

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  }

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.8
      }
    }
  }

  const gradientTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  return (
    <motion.section
      className="section-container relative min-h-[calc(100vh-4rem)]"
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance font-geist-sans dark:text-white"
            custom={0}
            variants={textVariants}
          >
            Hi, I am{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text animate-gradient inline-block"
              variants={gradientTextVariants}
            >
              Richard Owino
            </motion.span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-balance font-geist-sans dark:text-gray-100"
            custom={2}
            variants={textVariants}
          >
            A Full Stack Developer
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 text-balance font-geist-sans"
            custom={3}
            variants={textVariants}
          >
            I build exceptional digital experiences that combine elegant design with robust functionality.
            Passionate about creating innovative solutions that make a difference.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            custom={4}
            variants={textVariants}
          >
            <Button 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 text-base sm:text-lg px-6 py-3 w-full sm:w-auto font-geist-sans"
              asChild
            >
              <Link 
                href="/Docs/Richard Owino FCVP1HB.pdf"
                download="Richard_Owino_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </Button>
            <motion.div variants={socialVariants} className="flex gap-4 justify-center md:justify-start">
              <Button 
                variant="outline" 
                size="icon"
                className="w-12 h-12 hover:scale-110 transition-transform hover:bg-blue-500/10 dark:hover:bg-blue-500/20 border-2"
                asChild
              >
                <Link 
                  href="https://github.com/Richard-Abraham" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 hover:text-blue-600 dark:hover:text-blue-400" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="w-12 h-12 hover:scale-110 transition-transform hover:bg-blue-500/10 dark:hover:bg-blue-500/20 border-2"
                asChild
              >
                <Link 
                  href="https://www.linkedin.com/in/richard-owino/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 hover:text-blue-600 dark:hover:text-blue-400" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            <video
              src="/images/videome.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              style={{ filter: 'none' }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 