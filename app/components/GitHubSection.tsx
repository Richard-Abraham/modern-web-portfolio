"use client"

import { motion } from "framer-motion"
import { Github, ArrowUpRight, FolderGit2, GitFork, Star, GitCommit } from 'lucide-react'
import { Button } from "./ui/button"
import Link from "next/link"

export function GitHubSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const stats = [
    {
      icon: FolderGit2,
      color: "text-blue-400",
      label: "Repositories",
      description: "Web apps & tools"
    },
    {
      icon: GitFork,
      color: "text-purple-400",
      label: "Open Source",
      description: "Contributions & forks"
    },
    {
      icon: Star,
      color: "text-amber-400",
      label: "Projects",
      description: "Active development"
    },
    {
      icon: GitCommit,
      color: "text-emerald-400",
      label: "Consistent",
      description: "Daily commits"
    }
  ]

  return (
    <motion.section
      className="section-container w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <motion.div variants={itemVariants} className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium font-geist mb-5">
                <Github className="h-4 w-4" />
                Open Source
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-poppins text-balance"
                  variants={itemVariants}
                >
                  Explore My Code on{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 text-transparent bg-clip-text">
                    GitHub
                  </span>
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-geist leading-relaxed"
                  variants={itemVariants}
                >
                  Browse through my repositories to see the projects I&apos;ve built,
                  the technologies I use, and the contributions I make to the open source community.
                </motion.p>

                <motion.div variants={itemVariants}>
                  <Button
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 text-base sm:text-lg px-8 py-4 h-auto font-geist shadow-xl shadow-blue-600/25"
                    asChild
                  >
                    <Link
                      href="https://github.com/Richard-Abraham"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Github className="h-5 w-5" />
                      View My Repositories
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-auto lg:min-w-[360px]"
                variants={itemVariants}
              >
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="p-5 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20 group"
                    >
                      <Icon className={`h-7 w-7 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                      <p className="text-base font-bold text-white font-poppins">{stat.label}</p>
                      <p className="text-xs text-gray-400 font-geist mt-1">{stat.description}</p>
                    </div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
