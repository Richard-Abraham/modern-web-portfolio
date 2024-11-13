"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from 'lucide-react'
import Link from "next/link"
import { Button } from "./ui/button"

export function Contact() {
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      id="contact"
      className="section-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={contactVariants}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
        variants={itemVariants}
      >
        Contact
      </motion.h2>
      <div className="max-w-md space-y-8">
        <motion.p 
          className="text-gray-700 dark:text-gray-300 text-lg"
          variants={itemVariants}
        >
          I&apos;m always interested in hearing about new projects and opportunities.
          Feel free to reach out if you&apos;d like to connect!
        </motion.p>
        
        <motion.div 
          className="flex flex-col gap-6"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <a 
              href="tel:+254715050576" 
              className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              +254 715 050 576
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Button 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 w-full"
              asChild
            >
              <Link 
                href="mailto:richardaowino@gmail.com"
                className="flex items-center justify-center gap-2 text-lg py-6"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 