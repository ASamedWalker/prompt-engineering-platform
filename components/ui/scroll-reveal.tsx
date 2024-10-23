// components/ui/scroll-reveal.tsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  width?: "full" | "partial"
}

export function ScrollReveal({ children, className = "", width = "partial" }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: width === "full" ? -200 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: width === "full" ? -200 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}