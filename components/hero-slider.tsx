"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      title: "Building Excellence in Kenya",
      subtitle: "30+ Years of Construction Expertise",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
      cta: "Start Your Project",
    },
    {
      title: "Residential Perfection",
      subtitle: "Beautiful Homes Built to Last",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
      cta: "View Homes",
    },
    {
      title: "Commercial Innovation",
      subtitle: "State-of-the-Art Business Spaces",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
      cta: "Explore Projects",
    },
    {
      title: "Industrial Solutions",
      subtitle: "Durable Structures for Every Need",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
      cta: "Learn More",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-up"></div>
        <div
          className="absolute top-40 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float-up"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-36 h-36 bg-primary/5 rounded-full blur-3xl animate-float-up"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary-dark/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold mb-4 text-balance drop-shadow-lg">{slide.title}</h1>
              <p className="text-2xl lg:text-3xl text-blue-100 mb-8 text-pretty drop-shadow-md">{slide.subtitle}</p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 ease-out backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 ease-out backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
              index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-20 text-white text-sm bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
