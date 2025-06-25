"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  src: string
  title: string
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      setIsLoading(true)
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src={src} onEnded={handleEnded} preload="none" />

      <button
        onClick={togglePlayPause}
        disabled={isLoading}
        className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
        aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
      >
        {isLoading ? (
          <div className="w-4 h-4 border border-gray-400 border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
