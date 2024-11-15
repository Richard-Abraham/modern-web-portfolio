"use client"

import { useEffect } from 'react'

export function Loading() {
  useEffect(() => {
    async function registerLoader() {
      const { superballs } = await import('ldrs')
      superballs.register()
    }
    registerLoader()
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 animate-gradient-slow" />
      <div className="absolute inset-0 bg-[#FEFFFF]/50 dark:bg-gray-950/50 backdrop-blur-3xl" />
      <div className="relative text-center space-y-4">
        <l-superballs
          size="50"
          speed="1.4"
          color="white"
        ></l-superballs>
        <p className="text-white text-lg font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
} 