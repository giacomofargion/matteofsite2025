import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Matteo Fargion - Composer & Performer",
  description: "Website of composer and performer Matteo Fargion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="text-center py-8 border-b border-gray-200 relative">
            <h1 className="text-2xl font-extralight text-gray-600">Matteo Fargion</h1>
          </header>
          <div className="flex max-w-6xl mx-auto">
            <Navigation />
            <main className="flex-1 p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
