import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"
import PageLoader from "@/components/page-loader"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

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