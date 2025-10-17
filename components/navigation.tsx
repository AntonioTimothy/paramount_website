"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-out ${
        isScrolled ? "bg-white shadow-2xl" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-14 h-14 group-hover:scale-110 transition-all duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_paramount-61TDZVlodVsneMs9z77M5HdbBPzdIa.png"
                alt="Paramount Top-Tier Limited"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out relative group rounded-md ${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+254720894859"
              className="flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:bg-blue-50 rounded-lg transition-all duration-300 ease-out group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-all duration-300" />
              <span className="hidden lg:inline">+254 720 894859</span>
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg text-white transition-all duration-300"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-out"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down border-t border-blue-100">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ease-out font-medium ${
                  isActive(item.href)
                    ? "text-primary bg-blue-50"
                    : "text-foreground hover:bg-blue-50 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3 space-y-3 border-t border-blue-100 mt-3">
              <a href="tel:+254720894859" className="flex items-center gap-2 text-primary font-semibold">
                <Phone size={18} />
                +254 720 894859
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
