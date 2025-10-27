"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Calendar, 
  ArrowRight,
  Building2,
  Home,
  Briefcase,
  Star,
  Award
} from "lucide-react"

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [

    {
      id: 12,
      title: "Mount Sinai - Kinoo",
      category: "residential",
      year: "2024-ongoing",
      location: "Kikuyu, Kiambu",
      description: "Large-scale residential housing development featuring modern architecture and premium amenities",
      image: "kinoo1.jpg",
      stats: {
        area: "12,000 m²",
        duration: "18 months",
        team: "40+ professionals"
      },
      featured: true
    },
    
    {
      id: 6,
      title: "Civil Servants Housing Scheme",
      category: "residential",
      year: "2019-2023",
      location: "Kiambu, Kenya",
      description: "Large-scale residential housing development featuring modern architecture and premium amenities",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
      stats: {
        area: "12,000 m²",
        duration: "18 months",
        team: "40+ professionals"
      },
      featured: true
    },
    {
      id: 1,
      title: "South Sudan School Dormitory",
      category: "residential",
      year: "2005",
      location: "South Sudan",
      description: "Modern dormitory facility for Madam Rebeca Ngaran with comprehensive educational infrastructure",
      image: "/south1.jpg",
      stats: {
        area: "5,000 m²",
        duration: "8 months",
        team: "25+ professionals"
      },
      featured: true
    },
    {
      id: 3,
      title: "Sameer Business Park",
      category: "commercial",
      year: "2008-2009",
      location: "Nairobi",
      description: "Premium commercial business park complex with state-of-the-art office and retail spaces",
      image: "sameer1.jpg",
      stats: {
        area: "15,000 m²",
        duration: "20 months",
        team: "50+ professionals"
      },
      featured: true
    },
    {
      id: 4,
      title: "Nine West Commercial Complex",
      category: "commercial",
      year: "2010-2011",
      location: "Westlands, Nairobi - Kenya",
      description: "High-end commercial retail space designed for premium brands and modern businesses",
      image: "9west.jpg",
      stats: {
        area: "8,000 m²",
        duration: "14 months",
        team: "30+ professionals"
      }
    },
    {
      id: 5,
      title: "Ndaragwa DCS Office",
      category: "commercial",
      year: "2012-2013",
      location: "Ndaragwa",
      description: "Government office complex construction built to the highest professional standards",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
      stats: {
        area: "6,000 m²",
        duration: "16 months",
        team: "35+ professionals"
      }
    }
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Building2, count: projects.length },
    { id: "residential", label: "Residential", icon: Home, count: projects.filter(p => p.category === "residential").length },
    { id: "commercial", label: "Commercial", icon: Briefcase, count: projects.filter(p => p.category === "commercial").length },
  ]

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">150+ Projects Completed</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Portfolio</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Showcase of our completed projects across Kenya and beyond, demonstrating 30+ years of construction excellence and NCA 4 certified quality.
          </p>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: "150+", label: "Projects" },
              { number: "30+", label: "Years Experience" },
              { number: "NCA 4", label: "Certified" },
              { number: "98%", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-slate-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-out ${
                    filter === cat.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <Icon size={18} />
                  <span>{cat.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    filter === cat.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      project.category === 'residential' 
                        ? 'bg-green-500' 
                        : 'bg-blue-500'
                    }`}>
                      {project.category === 'residential' ? 'Residential' : 'Commercial'}
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between text-white text-sm">
                      <div className="text-center">
                        <div className="font-bold">{project.stats.area}</div>
                        <div className="text-blue-200">Area</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold">{project.stats.duration}</div>
                        <div className="text-blue-200">Duration</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold">{project.stats.team}</div>
                        <div className="text-blue-200">Team</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl"
                  >
                    <Link href={`/portfolio/${project.id}`} className="flex items-center justify-center gap-2">
                      View Project Details
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No projects found</h3>
              <p className="text-slate-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's build something extraordinary together. Get a detailed quote from our NCA 4 certified construction experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Consultation <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-8 py-6 text-lg"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore Our Services <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}