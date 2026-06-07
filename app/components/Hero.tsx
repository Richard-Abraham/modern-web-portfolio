"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Download, ArrowRight, Linkedin, ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ParticleBackground } from "./ParticleBackground"

const slides = [
  {
    title: "Vikapu Website",
    image: "/images/vikapu.png",
    demo: "https://vikapuwebsite-main-richard-abrahams-projects.vercel.app",
  },
  {
    title: "CarePoint",
    image: "/images/carepoint.png",
    demo: "https://dev-caramanagement.digisrupt.co.ke/",
  },
  {
    title: "Nobuk",
    image: "/images/Nobuk.png",
    demo: "https://dazzling-tarsier-8456b4.netlify.app/nobuk_1",
  },
  {
    title: "Sales Lead Generator",
    image: "/images/saleslead.png",
    demo: "https://sales-lead-tool.netlify.app/",
  },
  {
    title: "Caresoko",
    image: "/images/caresoko.png",
    demo: "http://app.caresoko.com/#/welcomeScreen",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [imageError, setImageError] = useState(false)

  const next = useCallback(() => { setImageError(false); setCurrent((c) => (c + 1) % slides.length) }, [])
  const prev = useCallback(() => { setImageError(false); setCurrent((c) => (c - 1 + slides.length) % slides.length) }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

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
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-2"
            variants={itemVariants}
          >
            <Link
              href="/Docs/Richard Owino CV.pdf"
              download="Richard_Owino_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base sm:text-lg px-8 py-3 w-full sm:w-auto font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white hover:opacity-90 shadow-lg shadow-blue-600/25 dark:shadow-blue-600/20 transition-all duration-200"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Link>

            <Link
              href="https://github.com/Richard-Abraham"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub Profile"
              className="inline-flex items-center justify-center gap-2 rounded-lg text-base sm:text-lg px-8 py-3 w-full sm:w-auto font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              View GitHub
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
            <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto">
              <div className="relative rounded-xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 shadow-2xl shadow-blue-600/20 dark:shadow-blue-800/30">
                <div className="h-10 flex items-center px-4 gap-2 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200/60 dark:border-gray-700/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-200/60 dark:bg-gray-700/60 text-xs text-gray-500 dark:text-gray-400 max-w-[220px]">
                      <Globe className="h-3 w-3 shrink-0" />
                      <span className="truncate">{slides[current].title.toLowerCase().replace(/\s+/g, '-')}.dev</span>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Link
                        href={slides[current].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        {!imageError ? (
                          <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 520px"
                            onError={() => setImageError(true)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                            <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                              {slides[current].title}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <p className="text-white text-sm font-medium truncate max-w-[60%]">
                            {slides[current].title}
                          </p>
                          <span className="text-white/60 text-xs flex items-center gap-1">
                            Visit Site <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    onClick={(e) => { e.preventDefault(); prev() }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 shadow-lg transition-all duration-200"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(); next() }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 shadow-lg transition-all duration-200"
                    aria-label="Next project"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.preventDefault(); setImageError(false); setCurrent(i) }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === current ? "bg-white w-5" : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-red-600/15 rounded-[2rem] blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
