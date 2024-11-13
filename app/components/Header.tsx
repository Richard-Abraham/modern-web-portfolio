"use client"

import Link from "next/link"
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  activeSection: string
}

export function Header({ isDarkMode, setIsDarkMode, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ]

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <motion.header 
      className="fixed top-0 w-full glass-header z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
            Richard&apos;s Portfolio.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex items-center gap-8"
          variants={itemVariants}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group"
            >
              <span className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors
                ${activeSection === item.href.slice(1) ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                {item.label}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 
                transition-all duration-300 group-hover:w-full
                ${activeSection === item.href.slice(1) ? 'w-full' : ''}`} 
              />
            </Link>
          ))}
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 hover:scale-110 transition-transform"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variants={itemVariants}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[73px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative group text-xl"
                  >
                    <span className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors
                      ${activeSection === item.href.slice(1) ? 'text-blue-600 dark:text-blue-400' : ''}`}
                    >
                      {item.label}
                    </span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 
                      transition-all duration-300 group-hover:w-full
                      ${activeSection === item.href.slice(1) ? 'w-full' : ''}`} 
                    />
                  </Link>
                </motion.div>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="mt-4 hover:scale-110 transition-transform"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-600" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
} 