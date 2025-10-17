import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-lg">Paramount</span>
            </div>
            <p className="text-gray-400 text-sm">Leading construction excellence in Kenya since 1990s.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-all duration-300 ease-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-all duration-300 ease-out">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-all duration-300 ease-out">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-all duration-300 ease-out">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services#residential" className="hover:text-primary transition-all duration-300 ease-out">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-primary transition-all duration-300 ease-out">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/services#steel" className="hover:text-primary transition-all duration-300 ease-out">
                  Steel Structures
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="hover:text-primary transition-all duration-300 ease-out">
                  Renovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                <div>
                  <p>+254 720 894859</p>
                  <p>+254 700 517196</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                <p>paramounttoptiers@gmail.com</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <p>P.O. Box 20, Kiambu 00900, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2025 Paramount Top-Tier Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 ease-out">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 ease-out">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-all duration-300 ease-out">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
