"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  src: string
  title: string
}

// Global audio manager to handle single playback
class AudioManager {
  private static instance: AudioManager
  private currentPlayer: HTMLAudioElement | null = null
  private currentSetIsPlaying: ((playing: boolean) => void) | null = null

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  setCurrentPlayer(audio: HTMLAudioElement, setIsPlaying: (playing: boolean) => void) {
    // Pause the previous player if it exists
    if (this.currentPlayer && this.currentPlayer !== audio) {
      this.currentPlayer.pause()
      if (this.currentSetIsPlaying) {
        this.currentSetIsPlaying(false)
      }
    }

    this.currentPlayer = audio
    this.currentSetIsPlaying = setIsPlaying
  }

  clearCurrentPlayer(audio: HTMLAudioElement) {
    if (this.currentPlayer === audio) {
      this.currentPlayer = null
      this.currentSetIsPlaying = null
    }
  }
}

// Global audio manager to handle single playback
class AudioManager {
  private static instance: AudioManager
  private currentPlayer: HTMLAudioElement | null = null
  private currentSetIsPlaying: ((playing: boolean) => void) | null = null

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  setCurrentPlayer(audio: HTMLAudioElement, setIsPlaying: (playing: boolean) => void) {
    // Pause the previous player if it exists
    if (this.currentPlayer && this.currentPlayer !== audio) {
      this.currentPlayer.pause()
      if (this.currentSetIsPlaying) {
        this.currentSetIsPlaying(false)
      }
    }

    this.currentPlayer = audio
    this.currentSetIsPlaying = setIsPlaying
  }

  clearCurrentPlayer(audio: HTMLAudioElement) {
    if (this.currentPlayer === audio) {
      this.currentPlayer = null
      this.currentSetIsPlaying = null
    }
  }
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioManager = AudioManager.getInstance()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      setIsPlaying(false)
      audioManager.clearCurrentPlayer(audio)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('pause', handlePause)
      audioManager.clearCurrentPlayer(audio)
    }
  }, [audioManager])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      audioManager.clearCurrentPlayer(audio)
    } else {
      // Set this as the current player (will pause others)
      audioManager.setCurrentPlayer(audio, setIsPlaying)

      setIsLoading(true)
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
          audioManager.clearCurrentPlayer(audio)
        })
    }
  }

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src={src} preload="none" />

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
