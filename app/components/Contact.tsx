"use client"

import { Mail, Phone, Github, Linkedin, SendHorizonal } from 'lucide-react'
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white font-poppins"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className="text-gray-500 dark:text-gray-400 text-center max-w-lg mx-auto mb-10 sm:mb-12 font-geist"
          variants={itemVariants}
        >
          I&apos;m always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of these channels.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <div className="glass-card p-6 sm:p-8 md:p-10 space-y-8">
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
              <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="tel:+254715050576"
                className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity font-poppins"
              >
                +254 715 050 576
              </a>
              <span className="text-sm text-gray-400 dark:text-gray-500 font-geist -mt-2">
                Call or WhatsApp
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
            />

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <Button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 w-full h-12 font-geist"
                asChild
              >
                <Link
                  href="mailto:richardaowino@gmail.com"
                  className="flex items-center justify-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-geist"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/richard-owino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-geist"
                asChild
              >
                <Link
                  href="https://github.com/Richard-Abraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8 font-geist flex items-center justify-center gap-2"
          >
            <SendHorizonal className="h-4 w-4" />
            Available for freelance and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}
