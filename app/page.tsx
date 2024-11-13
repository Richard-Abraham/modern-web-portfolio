"use client"

import { useState, useEffect } from "react"
import { Contact } from "@/app/components/Contact"
import { Header } from "@/app/components/Header"
import { Hero } from "@/app/components/Hero"
import { Projects } from "@/app/components/Projects"
import { Skills } from "@/app/components/Skills"
import { useScrollSection } from "@/app/hooks/useScrollSection"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const activeSection = useScrollSection()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900 -z-10 animate-gradient-slow" />
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-950/50 backdrop-blur-3xl -z-5" />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />
      <main className="main-container">
        <div className="container mx-auto px-4">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}
