"use client"

import Link from "next/link"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
  activeSection: string
}

export function Header({
  isDarkMode,
  setIsDarkMode,
  activeSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      className="fixed top-0 w-full z-50 px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={`mx-auto max-w-7xl transition-all duration-500 ease-out ${
        isScrolled
          ? "mt-2 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm rounded-2xl"
          : "mt-4 bg-transparent"
      }`}>
        <nav className="flex items-center justify-between px-4 py-2.5">
          <Link
            href="/"
            className="text-lg font-bold font-poppins"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
              Richard&apos;s Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-geist transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-blue-600" />
                )}
              </motion.div>
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[51] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm z-[52] md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 dark:from-gray-950/95 dark:to-gray-950/90 backdrop-blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-red-50/50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-red-950/30" />

              <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
                <div className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={`w-full py-4 px-5 rounded-xl text-left text-lg font-medium font-geist transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-geist">
                      {isDarkMode ? "Dark Mode" : "Light Mode"}
                    </span>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
                    >
                      {isDarkMode ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Moon className="h-5 w-5 text-blue-600" />
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
