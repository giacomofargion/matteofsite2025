"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageWithCreditProps {
  src: string
  alt: string
  credit: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
}

export default function ImageWithCredit({
  src,
  alt,
  credit,
  width,
  height,
  className = "",
  fill = false,
}: ImageWithCreditProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {fill ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="w-full transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Photo credit text */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-light transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <p className="text-shadow-sm">Photo: {credit}</p>
      </div>
    </div>
  )
}
