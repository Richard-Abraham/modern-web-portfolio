"use client"

import { motion } from "framer-motion"
import { Github, Download, ArrowRight, Linkedin } from 'lucide-react'
import { Button } from "./ui/button"
import Link from "next/link"
import { ParticleBackground } from "./ParticleBackground"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-32 lg:pt-36"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          <div className="w-full lg:w-[58%] space-y-8 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 font-geist">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance text-gray-900 dark:text-white leading-[1.1] font-poppins">
                Hi, I&apos;m{" "}
                <span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-slow"
                >
                  Richard Owino
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 text-balance font-poppins"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 text-balance leading-relaxed font-geist"
              variants={itemVariants}
            >
              I build exceptional digital experiences that combine elegant design with robust functionality.
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
              variants={itemVariants}
            >
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 text-base sm:text-lg px-8 py-3 h-auto w-full sm:w-auto shadow-lg shadow-blue-600/25 font-geist"
                asChild
              >
                <Link
                  href="/Docs/Richard Owino CV.pdf"
                  download="Richard_Owino_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </Link>
              </Button>

              <Button
                variant="outline"
                className="text-base sm:text-lg px-8 py-3 h-auto w-full sm:w-auto border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 group font-geist"
                asChild
              >
                <Link
                  href="https://github.com/Richard-Abraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label="View GitHub Profile"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  View GitHub
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start pt-2"
              variants={itemVariants}
            >
              <span className="text-sm text-gray-400 dark:text-gray-500 font-geist">Connect</span>
              <div className="h-px w-8 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.linkedin.com/in/richard-owino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://github.com/Richard-Abraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:w-[42%] flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, x: 60, scale: 0.95 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
              }
            }}
          >
            <div className="relative w-full max-w-[320px] mx-auto lg:ml-auto animate-float">
              <div className="relative aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 p-2.5 shadow-2xl shadow-blue-600/20 dark:shadow-blue-800/30">
                <div className="relative w-full h-full rounded-[2.25rem] overflow-hidden bg-black">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                    <div className="w-14 h-1 rounded-full bg-gray-800" />
                  </div>
                  <video
                    src="/images/videome.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-5 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-red-600/15 rounded-[3rem] blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
