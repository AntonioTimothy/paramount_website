"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Building2, Star, Shield, Award } from "lucide-react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setProgress(0)
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    const timer = setTimeout(() => {
      setIsLoading(false)
      setProgress(100)
      clearInterval(progressInterval)
    }, 1200)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 z-[9999] flex items-center justify-center pointer-events-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.8s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)]"></div>
        </div>
      </div>

      <div className="relative text-center space-y-6">
        {/* Main Logo/Icon */}
        <div className="relative mx-auto mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
          
          {/* Middle Ring */}
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-b-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <div className="absolute inset-4 border-4 border-transparent border-r-emerald-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce">
            <Star className="w-3 h-3 text-yellow-600" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}>
            <Shield className="w-3 h-3 text-green-600" />
          </div>
        </div>

        {/* Company Name & Tagline */}
        <div className="space-y-3">
          <div className="text-white text-2xl font-bold tracking-wider animate-pulse">
            PARAMOUNT
          </div>
          <div className="text-blue-300 text-sm font-medium tracking-wide animate-pulse" style={{ animationDelay: '0.2s' }}>
            Top-Tier Construction
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="flex justify-between text-xs text-blue-300">
            <span>Loading Excellence</span>
            <span>{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4 pt-4">
          {[
            { icon: Award, text: "NCA 4 Certified", color: "text-green-400" },
            { icon: Star, text: "30+ Years", color: "text-yellow-400" },
            { icon: Shield, text: "150+ Projects", color: "text-blue-400" },
          ].map((badge, index) => {
            const Icon = badge.icon
            return (
              <div 
                key={index}
                className="flex items-center gap-1 text-xs text-blue-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className={`w-3 h-3 ${badge.color}`} />
                <span>{badge.text}</span>
              </div>
            )
          })}
        </div>

        {/* Construction Elements */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-8 bg-blue-500/30 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-emerald-500/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  )
}