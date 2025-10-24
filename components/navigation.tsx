"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    // { label: "Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200" 
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-none">Paramount</span>
              <span className="text-xs text-slate-600 leading-none">Top-Tier Limited</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ease-out relative group rounded-lg ${
                  isActive(item.href) 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+254720894859"
              className="flex items-center gap-2 px-4 py-2 text-slate-700 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-out group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-all duration-300" />
              <span className="hidden lg:inline">+254 720 894859</span>
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 ease-out"
          >
            {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-down border-t border-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 ease-out font-medium ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3 space-y-3 border-t border-slate-200 mt-3">
              <a href="tel:+254720894859" className="flex items-center gap-2 text-blue-600 font-semibold">
                <Phone size={18} />
                +254 720 894859
              </a>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}