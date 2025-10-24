"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Building2, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Paramount</div>
                <div className="text-blue-300 text-sm">Top-Tier Limited</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading construction excellence in Kenya since 1990s. Building the future with quality, innovation, and unmatched expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Facebook size={18} className="group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin size={18} className="group-hover:scale-110" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter size={18} className="group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Our Team", href: "/team" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-blue-400 transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Commercial Buildings", href: "/services#commercial" },
                { label: "Residential Projects", href: "/services#residential" },
                { label: "Steel Structures", href: "/services#steel" },
                { label: "Mechanical Engineering", href: "/services#mechanical" },
                { label: "Interior Design", href: "/services#interior" },
                { label: "Renovation", href: "/services#renovation" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-blue-400 transition-all duration-300 ease-out hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-400">
                  <p>+254 720 894859</p>
                  <p>+254 700 517196</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400">paramounttoptiers@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-400">P.O. Box 20, Kiambu 00900, Kenya</p>
              </div>
            </div>
            
            <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2025 Paramount Top-Tier Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg"
          >
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  )
}