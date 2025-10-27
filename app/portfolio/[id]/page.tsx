"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Briefcase, 
  ArrowRight,
  Ruler,
  Clock,
  Users,
  Award,
  Star,
  Building2,
  Home
} from "lucide-react"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects: Record<string, any> = {
   
    "12": {
      title: "Mount Sinai - Kinoo",
      category: "Residential",
      year: "2024-ongoing",
      location: "Kiambu, Kenya",
      description: "Large-scale residential housing development featuring modern architecture and premium amenities",
      fullDescription: "This large-scale residential housing scheme in Kiambu, Kenya, showcases our ability to manage complex multi-unit residential projects. The development features modern architecture, quality construction, and excellent finishing. Each unit was designed with attention to detail, providing comfortable living spaces with all modern conveniences in a secure and well-planned community environment.",
      images: [
        "/kinoo1.jpg",
        "/kinoo2.jpg",
        "/kinoo3.jpg",
        "/kinoo4.jpg",
        "/kinoo5.jpg",
        "/kinoo6.jpg",

       

      ]},
      "6": {
        title: "Civil Servants Housing Scheme",
        category: "Residential",
        year: "2017-2023",
        location: "Kiambu, Kenya",
        description: "Large-scale residential housing development featuring modern architecture and premium amenities",
        fullDescription: "This large-scale residential housing scheme in Kiambu, Kenya, showcases our ability to manage complex multi-unit residential projects. The development features modern architecture, quality construction, and excellent finishing. Each unit was designed with attention to detail, providing comfortable living spaces with all modern conveniences in a secure and well-planned community environment.",
        images: [
          "/civil1.jpg",
          "/civil2.jpg",
          "/civil3.jpg",
          "/civil4.jpg",
          "/civil5.jpg",
          "/civil6.jpg",
          "/civil7.jpg",
          "/civil8.jpg",
        ],
      features: [
        "Multiple residential units with varied designs",
        "Modern architectural design with aesthetic appeal",
        "High-quality finishes and materials",
        "Secure compound with perimeter wall",
        "Professional project management throughout"
      ],
      stats: {
        area: "12,000 m²",
        budget: "Confidential",
        team: "40+ professionals",
        duration: "18 months",
        units: "24 residential units",
        parking: "50+ parking spaces"
      },
      achievements: [
        "NCA 4 certified construction",
        "98% client satisfaction rate",
        "Zero budget overruns"
      ]
    },

    "1": {
      title: "South Sudan School Dormitory",
      category: "Residential",
      year: "2005",
      location: "South Sudan",
      description: "Modern dormitory facility for Madam Rebeca Ngaran with comprehensive educational infrastructure",
      fullDescription: "This project involved the construction of a modern dormitory facility in South Sudan. Our team delivered a high-quality residential structure with all modern amenities, demonstrating our commitment to excellence even in challenging environments. The facility features comfortable living spaces, modern sanitation facilities, and durable construction suitable for the local climate.",
      images: [
        "/south1.jpg",
        "/south2.jpg",
        "/south3.jpg",
      ],
      features: [
        "Modern dormitory design with optimal space utilization",
        "Quality construction materials for durability",
        "Comfortable and safe living spaces",
        "Professional finishing with modern amenities",
        "Timely completion despite logistical challenges"
      ],
      stats: {
        area: "5,000 m²",
        budget: "Confidential",
        team: "25+ professionals",
        duration: "8 months",
        rooms: "50+ dormitory rooms",
        floors: "2 floors"
      },
      achievements: [
        "Completed ahead of schedule",
        "Zero safety incidents",
        "Client satisfaction: 100%"
      ]
    },
    "3": {
      title: "Sameer Business Park",
      category: "Commercial",
      year: "2008-2009",
      location: "Nairobi",
      description: "Premium commercial business park complex with state-of-the-art office and retail spaces",
      fullDescription: "Sameer Business Park is a premium commercial complex that demonstrates our expertise in large-scale commercial construction. The project features modern office spaces, retail areas, and professional facilities designed to meet the needs of modern businesses. The complex incorporates energy-efficient systems, ample parking, and contemporary architectural design that has made it a landmark in Nairobi's commercial landscape.",
      images: [
        "/sameer1.jpg"
      ],
      features: [
        "Modern office spaces with flexible layouts",
        "Retail facilities with high visibility",
        "Professional architectural design",
        "Energy-efficient building systems",
        "Ample parking and security features"
      ],
      stats: {
        area: "15,000 m²",
        budget: "Confidential",
        team: "50+ professionals",
        duration: "20 months",
        floors: "6 floors",
        occupancy: "95% occupancy rate"
      },
      achievements: [
        "Commercial building award 2010",
        "Green building certification",
        "100% tenant satisfaction"
      ]
    },
    "4": {
      title: "9West Commercial Complex",
      category: "Commercial",
      year: "2010-2011",
      location: "Westlands Road, Nairobi",
      description: "High-end commercial retail space designed for premium brands and modern businesses",
      fullDescription: "Located on the prestigious Westlands, this commercial complex features high-end retail spaces designed for premium brands and businesses. The project showcases our ability to deliver sophisticated commercial spaces that combine aesthetic appeal with functional design. The complex has become a popular destination for upscale retail and professional services, featuring modern amenities and excellent accessibility.",
      images: [
        "/9west.jpg",
      ],
      features: [
        "Premium retail spaces with custom designs",
        "Modern architectural facade",
        "High visibility strategic location",
        "Professional interior finishes",
        "Advanced security and safety features"
      ],
      stats: {
        area: "8,000 m²",
        budget: "Confidential",
        team: "30+ professionals",
        duration: "14 months",
        shops: "25+ retail units",
        parking: "100+ parking spaces"
      },
      achievements: [
        "Retail excellence award",
        "100% occupancy within 6 months",
        "Premium tenant retention"
      ]
    },
    "5": {
      title: "Ndaragwa DCS Office",
      category: "Commercial",
      year: "2012-2013",
      location: "Ndaragwa",
      description: "Government office complex construction built to the highest professional standards",
      fullDescription: "This government office complex in Ndaragwa was built to the highest standards, featuring modern office spaces and professional facilities suitable for government operations. The project demonstrates our capability to handle government contracts with strict compliance requirements and attention to detail. The complex includes administrative offices, meeting rooms, and support facilities designed for efficient public service delivery.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
       
      ],
      features: [
        "Government-standard construction quality",
        "Professional office spaces and facilities",
        "Modern amenities and utilities",
        "Comprehensive security features",
        "Durable and maintenance-friendly finishes"
      ],
      stats: {
        area: "6,000 m²",
        budget: "Confidential",
        team: "35+ professionals",
        duration: "16 months",
        offices: "40+ office rooms",
        facilities: "Conference rooms & archives"
      },
      achievements: [
        "Government compliance certification",
        "On-time delivery",
        "Zero defect handover"
      ]
    },
  }
    

  const project = projects[params.id]

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
            <Building2 className="w-8 h-8 text-slate-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-6">The project you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Gallery Section */}
      <section className="relative h-[70vh] bg-black">
        <img
          src={project.images[currentImageIndex] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Gallery Navigation */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 ease-out backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 ease-out backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-sm bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
          {currentImageIndex + 1} / {project.images.length}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.category === 'Residential' ? 'bg-green-500' : 'bg-blue-500'
              }`}>
                {project.category}
              </div>
              <div className="flex items-center gap-1 text-blue-200 text-sm">
                <Award className="w-4 h-4" />
                <span>NCA 4 Certified</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{project.fullDescription}</p>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
              <ul className="space-y-4 mb-8">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Achievements */}
              {project.achievements && (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.achievements.map((achievement: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
                        <Star className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-green-800 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`relative h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === i 
                        ? "border-blue-500 ring-2 ring-blue-200" 
                        : "border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Statistics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Ruler className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Project Area</span>
                    </div>
                    <span className="font-semibold text-slate-900">{project.stats.area}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Duration</span>
                    </div>
                    <span className="font-semibold text-slate-900">{project.stats.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Team Size</span>
                    </div>
                    <span className="font-semibold text-slate-900">{project.stats.team}</span>
                  </div>
                  {project.stats.rooms && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Home className="w-5 h-5 text-blue-600" />
                        <span className="text-slate-700">Rooms/Units</span>
                      </div>
                      <span className="font-semibold text-slate-900">{project.stats.rooms}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300">
                  <Calendar className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-slate-600">Completion Year</p>
                    <p className="font-semibold text-slate-900">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300">
                  <MapPin className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="font-semibold text-slate-900">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors duration-300">
                  <Briefcase className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-slate-600">Project Category</p>
                    <p className="font-semibold text-slate-900">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg rounded-xl">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your next construction project with our NCA 4 certified experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-8 py-6 text-lg"
            >
              <Link href="/services" className="flex items-center gap-2">
                Our Services <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}