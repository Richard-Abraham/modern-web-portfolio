"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from 'lucide-react'
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import { ParticleBackground } from "./ParticleBackground"

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, 20],
      transition: {
        times: [0, 0.2, 0.8, 1],
        duration: 10,
        repeat: Infinity,
        repeatDelay: 2,
        delay: i * 0.3,
        ease: "easeInOut"
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
        delay: 0.5
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
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      className="section-container relative min-h-screen"
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full gap-8 md:gap-0">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold dark:text-white"
            custom={0}
            variants={textVariants}
          >
            Hi, I am{" "}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text animate-gradient"
              variants={gradientTextVariants}
            >
              Richard Owino
            </motion.span>
          </motion.h1>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold dark:text-gray-100"
            custom={2}
            variants={textVariants}
          >
            A Full Stack Developer.
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
            custom={3}
            variants={textVariants}
          >
            I build exceptional digital experiences that combine elegant design with robust functionality.
            Passionate about creating innovative solutions that make a difference.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" custom={4} variants={textVariants}>
            <Button 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto"
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
                className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform hover:bg-blue-500/10 dark:hover:bg-blue-500/20 border-2"
                asChild
              >
                <Link 
                  href="https://github.com/Richard-Abraham" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 hover:text-blue-600 dark:hover:text-blue-400" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform hover:bg-blue-500/10 dark:hover:bg-blue-500/20 border-2"
                asChild
              >
                <Link 
                  href="https://www.linkedin.com/in/richard-owino/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 hover:text-blue-600 dark:hover:text-blue-400" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="w-full md:w-1/2 md:absolute md:right-0 md:top-0 md:h-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-square md:h-full">
            <Image
              src="/images/logo.png"
              alt="Profile"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 