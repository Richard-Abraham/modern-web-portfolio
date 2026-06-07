"use client"

export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-gray-950">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 animate-spin" style={{ animationDuration: '1s', maskImage: 'radial-gradient(circle, transparent 55%, black 56%)', WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 56%)' }} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
            Richard Owino
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500 animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    </div>
  )
}
