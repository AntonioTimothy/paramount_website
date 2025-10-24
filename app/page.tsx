"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  Lightbulb,
  Target,
  Play,
  Star,
  Clock,
  Building2,
  ChevronLeft,
  ChevronRight,
  Factory,
  Wrench,
  Palette,
  RefreshCw,
  Phone,
} from "lucide-react"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg"
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-16">
        {/* Enhanced Architectural Background with Motion */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 bg-[length:100px_100px] bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)]"></div>
            
            {/* Architectural Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-400/20 rounded-lg animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 border-2 border-cyan-400/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border-2 border-blue-400/15 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating Shapes */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-800/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-24">
          {/* Left Content - Enhanced */}
          <div className="text-white space-y-8 lg:space-y-10 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20 shadow-lg">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold">NCA 4 Certified • 30+ Years Excellence</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Building
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
                  Kenya's Future
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Premier construction company delivering exceptional residential, commercial, and industrial projects across Kenya with unmatched expertise and NCA 4 certified quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project <ArrowRight className="ml-1" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105">
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Play className="mr-1" size={20} />
                  View Our Work
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {[
                { number: "150+", label: "Projects", sublabel: "Completed" },
                { number: "30+", label: "Years", sublabel: "Experience" },
                { number: "98%", label: "Client", sublabel: "Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  <div className="text-blue-300/80 text-xs">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Slider - Enhanced */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm">
              {/* Image Slider */}
              <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Construction Project ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Slider Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute top-6 right-6 z-20 text-white text-sm bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                {currentSlide + 1} / {heroImages.length}
              </div>
            </div>
            
            {/* Enhanced Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">NCA 4 Certified</div>
                  <div className="text-sm text-gray-600">Highest Quality Standard</div>
                </div>
              </div>
            </div>

            {/* Second Floating Card */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-4 shadow-2xl border border-white/20 animate-bounce-slow">
              <div className="text-center">
                <div className="text-lg font-bold">30+</div>
                <div className="text-xs text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "30+", label: "Years Experience", icon: Award, color: "from-blue-500 to-cyan-500", delay: "0ms" },
              { number: "150+", label: "Projects Completed", icon: Briefcase, color: "from-green-500 to-emerald-500", delay: "100ms" },
              { number: "65+", label: "Team Members", icon: Users, color: "from-orange-500 to-amber-500", delay: "200ms" },
              { number: "98%", label: "Client Satisfaction", icon: Star, color: "from-purple-500 to-pink-500", delay: "300ms" },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center group animate-fade-in-up" style={{ animationDelay: stat.delay }}>
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-3 lg:p-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Mission, Vision, Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4">Our Foundation</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Built on a strong foundation of values that drive our success and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To deliver exceptional construction services that exceed client expectations through quality, innovation, and professional excellence.",
                color: "from-blue-500 to-cyan-500",
                features: ["Quality Excellence", "Client Satisfaction", "Innovation Driven"]
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description: "To be the leading construction provider in East Africa by 2025, known for reliability, innovation, and sustainable building practices.",
                color: "from-orange-500 to-amber-500",
                features: ["Market Leadership", "Sustainable Practices", "Regional Expansion"]
              },
              {
                icon: TrendingUp,
                title: "Our Values",
                description: "Hard Work, Integrity, Timely Delivery, and Exceptional Client Support form the foundation of everything we do.",
                color: "from-green-500 to-emerald-500",
                features: ["Integrity First", "Timely Delivery", "Client Focus"]
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-gradient-to-br ${item.color} p-2 lg:p-3 mb-4 lg:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4 group-hover:text-slate-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm lg:text-base mb-4 lg:mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-700 text-sm lg:text-base">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your vision and requirements with NCA 4 certified quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Building2,
                title: "Commercial Buildings",
                description: "State-of-the-art commercial spaces designed for modern business needs and productivity.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Factory,
                title: "Steel Structures",
                description: "Durable and efficient industrial structures for warehouses and manufacturing facilities.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Wrench,
                title: "Mechanical Engineering",
                description: "Expert installation and integration of advanced mechanical systems and HVAC.",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: Palette,
                title: "Interior Design",
                description: "Creative and functional interior solutions that enhance space and aesthetics.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: RefreshCw,
                title: "Renovation",
                description: "Professional renovation services to transform and upgrade existing structures.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Consultation",
                description: "Expert construction consultation and project management services.",
                color: "from-indigo-500 to-purple-500"
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2 mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 text-sm lg:text-base leading-relaxed mb-4">{service.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-white text-white hover:bg-white/10 bg-transparent text-sm"
                  >
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10 lg:mt-12">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/services" className="flex items-center gap-2">
                Explore All Services <ArrowRight className="ml-1" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 lg:mb-8">Why Choose Paramount?</h2>
              <div className="space-y-4 lg:space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    desc: "Rigorous quality control at every stage with ISO 9001:2015 certification and NCA 4 standards",
                  },
                  { 
                    icon: Shield, 
                    title: "Safety First", 
                    desc: "Comprehensive safety protocols and continuous training programs for all team members" 
                  },
                  { 
                    icon: Zap, 
                    title: "On-Time Delivery", 
                    desc: "Proven track record of completing projects within schedule and budget constraints" 
                  },
                  { 
                    icon: Users, 
                    title: "Expert Team", 
                    desc: "30+ years of combined experience in construction management and engineering" 
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 group animate-fade-in-left"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2 flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base lg:text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm lg:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/group.jpg"
                  alt="Construction team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl p-4 lg:p-6 shadow-2xl border border-slate-200 animate-pulse-glow">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-slate-600 text-sm lg:text-base">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">Showcase of our recent completed works and success stories across Kenya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              
              {
                title: "Mount Sinai - Kinoo",
                year: "2024-ongoing",
                category: "Residential",
                image: "/kinoo1.jpg",
                description: "1 Bedroom Apartments Blocks - Kiambu"
              },
              {
                title: "Civil Servants Housing - Kiambu",
                year: "2017-2022",
                category: "Residential",
                image: "/civil1.jpg",
                description: "Modern residential complex featuring 50+ luxury units"
              },
              {
                title: "Sameer Business Park",
                year: "2008-2009",
                category: "Commercial",
                image: "/sameer1.jpg",
                description: "Mixed-use business park development"
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm lg:text-base mb-4 line-clamp-2">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
                  >
                    <Link href="/portfolio">View Project Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 lg:mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-slate-900 to-blue-900 text-white hover:from-slate-800 hover:to-blue-800 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/portfolio" className="flex items-center gap-2">
                View All Projects <ArrowRight className="ml-1" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto">How we bring your vision to life with precision and NCA 4 certified excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { 
                step: "01", 
                title: "Consultation", 
                desc: "Understand your vision, requirements, and project scope with detailed analysis",
                icon: Users
              },
              { 
                step: "02", 
                title: "Planning", 
                desc: "Develop detailed project plans, designs, and budget analysis with NCA compliance",
                icon: Target
              },
              { 
                step: "03", 
                title: "Execution", 
                desc: "Professional construction with continuous quality control and project management",
                icon: Zap
              },
              { 
                step: "04", 
                title: "Delivery", 
                desc: "Quality handover, comprehensive documentation, and ongoing support services",
                icon: CheckCircle
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="relative group text-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-500 h-full group-hover:scale-105">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">{item.step}</div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Get Your Free Consultation Today</span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our expert team today for a free consultation and detailed project quote. Let's create something extraordinary together with NCA 4 certified quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-6 lg:px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get Your Free Quote <ArrowRight className="ml-1" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-6 lg:px-8 py-6 text-lg"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Portfolio <ArrowRight className="ml-1" size={20} />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+254 720 894859 | +254 700 517196</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>NCA 4 Certified Quality</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}