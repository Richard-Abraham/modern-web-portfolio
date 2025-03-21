"use client"

import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section 
      id="contact" 
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white font-geist-sans text-balance"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h2>
        
        <motion.div 
          className="max-w-lg mx-auto glass-card p-6 sm:p-8"
          variants={itemVariants}
        >
          <motion.p 
            className="text-gray-700 dark:text-gray-300 text-center mb-8 text-base sm:text-lg font-geist-sans text-balance"
            variants={itemVariants}
          >
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of these channels!
          </motion.p>

          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4 justify-center">
              <Phone className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              <a 
                href="tel:+254715050576" 
                className="text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity font-geist-sans"
              >
                +254 715 050 576
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 w-full sm:w-auto font-geist-sans"
                asChild
              >
                <Link 
                  href="mailto:richardaowino@gmail.com"
                  className="flex items-center justify-center gap-2 py-6"
                >
                  <Mail className="h-5 w-5" />
                  Email Me
                </Link>
              </Button>

              <Button 
                variant="outline"
                className="w-full sm:w-auto hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-geist-sans"
                asChild
              >
                <Link 
                  href="https://www.linkedin.com/in/richard-owino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-6"
                >
                  <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  LinkedIn
                </Link>
              </Button>

              <Button 
                variant="outline"
                className="w-full sm:w-auto hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-geist-sans"
                asChild
              >
                <Link 
                  href="https://github.com/Richard-Abraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-6"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 