"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  hue: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: -1000, y: -1000 })
  const animationFrameId = useRef<number>()
  const darkRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const dark = document.documentElement.classList.contains('dark')
      darkRef.current = dark
      particles.current = Array.from({ length: 35 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() * 60 + 200,
      }))
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dark = darkRef.current
      const particleArray = particles.current
      const mx = mousePosition.current.x
      const my = mousePosition.current.y
      const len = particleArray.length

      for (let i = 0; i < len; i++) {
        const p = particleArray[i]

        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.3
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 70%, ${dark ? '60%' : '50%'}, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < len; j++) {
          const other = particleArray[j]
          const pdx = p.x - other.x
          const pdy = p.y - other.y
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy)

          if (pdist < 80) {
            ctx.beginPath()
            ctx.strokeStyle = `hsla(${(p.hue + other.hue) / 2}, 70%, ${dark ? '60%' : '50%'}, ${0.06 * (1 - pdist / 80)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    let mouseTimeout: ReturnType<typeof setTimeout>
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        mousePosition.current = { x: e.clientX, y: e.clientY }
      }, 16)
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const observer = new MutationObserver(() => {
      darkRef.current = document.documentElement.classList.contains('dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}
