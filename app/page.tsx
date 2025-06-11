"use client"

import { useState, useEffect } from "react"
import { Contact } from "@/app/components/Contact"
import { Header } from "@/app/components/Header"
import { Hero } from "@/app/components/Hero"
import { Projects } from "@/app/components/Projects"
import { Skills } from "@/app/components/Skills"
import { useScrollSection } from "@/app/hooks/useScrollSection"
import { Loading } from "./components/Loading"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const activeSection = useScrollSection()

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEFFFF] via-blue-50 to-[#FEFFFF] dark:from-blue-950 dark:via-purple-950 dark:to-gray-900 -z-10 animate-gradient-slow fixed" />
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-950/50 backdrop-blur-3xl -z-5 fixed" />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />
      <main className="relative z-[2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}
