"use client"

import { motion } from "framer-motion"
import type React from "react"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
