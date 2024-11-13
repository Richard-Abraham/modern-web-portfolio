"use client"


import { Mail, Phone } from 'lucide-react'
import Link from "next/link"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Contact
        </h2>
        
        <div className="max-w-md mx-auto glass-card p-8">
          <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center">
              <Phone className="h-5 w-5 text-blue-400" />
              <a 
                href="tel:+254715050576" 
                className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
              >
                +254 715 050 576
              </a>
            </div>

            <Button 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 w-full"
              asChild
            >
              <Link 
                href="mailto:richardaowino@gmail.com"
                className="flex items-center justify-center gap-2 py-6"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 