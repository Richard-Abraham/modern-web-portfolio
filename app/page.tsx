"use client"

import { useState, useEffect } from "react"
import { Contact } from "@/app/components/Contact"
import { GitHubSection } from "@/app/components/GitHubSection"
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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)

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
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/30 dark:to-gray-950 -z-10" />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />
      <main className="relative z-[2]">
        <Hero />
        <GitHubSection />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
