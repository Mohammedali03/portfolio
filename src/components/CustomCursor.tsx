import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window

  useEffect(() => {
    if (isTouchDevice) return

    const dot = dotRef.current
    if (!dot) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1
      dot.style.transform = `translate(${currentX}px, ${currentY}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <motion.div
      ref={dotRef}
      className="fixed top-0 left-0 w-4 h-4 bg-primary-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      initial={{ x: 0, y: 0, scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}
