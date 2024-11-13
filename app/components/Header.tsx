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
        stiffness: 100,
        damping: 15
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
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
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="relative z-50"
        >
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
              Richard&apos;s Portfolio.
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <Link 
                href={item.href} 
                className={`
                  relative px-2 py-1 text-gray-700 dark:text-gray-200 transition-all duration-300
                  ${activeSection === item.label.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : ''}
                `}
              >
                {item.label}
                {activeSection === item.label.toLowerCase() && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
                    layoutId="underline"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative overflow-hidden group"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-500" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div variants={itemVariants} className="md:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              variants={mobileMenuVariants}
              exit="exit"
            >
              <nav className="flex flex-col h-full items-center justify-center">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    className="mb-4"
                  >
                    <Link 
                      href={item.href} 
                      className={`
                        relative px-2 py-1 text-gray-700 dark:text-gray-200 transition-all duration-300
                        ${activeSection === item.label.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : ''}
                      `}
                    >
                      {item.label}
                      {activeSection === item.label.toLowerCase() && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"
                          layoutId="underline"
                          transition={{ type: "spring", bounce: 0.25 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants}>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="relative overflow-hidden group"
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotate: isDarkMode ? 180 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isDarkMode ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 text-blue-500" />
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
} 