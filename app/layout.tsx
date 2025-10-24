import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import PageLoader from "@/components/page-loader"

// Safe font loading with error handling
let geistSans: any = { className: '', variable: '' }
let geistMono: any = { variable: '' }

try {
  // Dynamic import to avoid build-time issues
  const fontModule = require("next/font/google")
  if (fontModule.Geist && fontModule.Geist_Mono) {
    geistSans = fontModule.Geist({
      subsets: ["latin"],
      variable: '--font-geist-sans',
      display: 'swap',
    })
    geistMono = fontModule.Geist_Mono({
      subsets: ["latin"],
      variable: '--font-geist-mono', 
      display: 'swap',
    })
  }
} catch (error) {
  // Fallback to system fonts if Google fonts fail
  console.warn('Google Fonts not available, using system fonts')
}

export const metadata: Metadata = {
  title: "Paramount Top-Tier Limited | Construction Excellence in Kenya",
  description: "Leading construction company in Kenya specializing in residential, commercial, and industrial projects with 30+ years of expertise.",
  keywords: "construction, Kenya, Kiambu, building, commercial, residential, steel structures",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.className} ${geistMono.variable} bg-background text-foreground antialiased`}>
        <PageLoader />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}