import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Page not found</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go home
        </Link>
      </div>
    </div>
  )
}
