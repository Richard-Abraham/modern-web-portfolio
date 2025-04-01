"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeSection: string;
}

export function Header({
  isDarkMode,
  setIsDarkMode,
  activeSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 px-4 transition-all duration-300 ${
        isScrolled ? "pt-2" : "pt-4"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div
        className={`glass-header mx-auto max-w-7xl  px-3  transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="mx-autopy-2 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold font-geist-sans">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
              Richard&apos;s Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            variants={itemVariants}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-all duration-300 font-geist-sans hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-2 hover:scale-110 transition-transform hover:bg-gray-100 dark:hover:bg-gray-800"
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
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors menu-button relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={itemVariants}
            aria-label="Toggle menu"
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
            <>
              {/* Backdrop overlay */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[51] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Sheet content */}
              <motion.div
                className="fixed inset-x-0 top-[73px] z-[52] md:hidden mobile-menu h-[calc(100vh-73px)] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-red-100/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-red-900/20 opacity-40" />

                <div className="relative container mx-auto px-4 py-6 flex flex-col items-center">
                  <div className="w-full max-w-md mx-auto space-y-2">
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
                          className="relative group w-full flex items-center justify-center"
                        >
                          <div
                            className={`w-full py-4 px-6 rounded-lg transition-all duration-300
                            ${
                              activeSection === item.href.slice(1)
                                ? "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-red-500/20"
                                : "hover:bg-gradient-to-r hover:from-blue-500/5 hover:via-purple-500/5 hover:to-red-500/5 dark:hover:from-blue-500/10 dark:hover:via-purple-500/10 dark:hover:to-red-500/10"
                            }`}
                          >
                            <span
                              className={`text-lg font-medium transition-colors
                              ${
                                activeSection === item.href.slice(1)
                                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text"
                                  : "text-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="pt-4 flex justify-center"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-900/80 hover:border-gray-300 dark:hover:border-gray-600"
                      >
                        {isDarkMode ? (
                          <Sun className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <Moon className="h-5 w-5 text-blue-600" />
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
