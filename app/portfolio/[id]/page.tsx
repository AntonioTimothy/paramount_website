"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Briefcase } from "lucide-react"

export default function PortfolioDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects: Record<string, any> = {
    "1": {
      title: "South Sudan School Dormitory",
      category: "Residential",
      year: "2005",
      location: "South Sudan",
      description:
        "Modern dormitory facility for Madam Rebeca Ngaran. A comprehensive residential project showcasing our expertise in educational infrastructure.",
      fullDescription:
        "This project involved the construction of a modern dormitory facility in South Sudan. Our team delivered a high-quality residential structure with all modern amenities, demonstrating our commitment to excellence even in challenging environments.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
      ],
      features: [
        "Modern dormitory design",
        "Quality construction materials",
        "Comfortable living spaces",
        "Professional finishing",
        "Timely completion",
      ],
      stats: {
        area: "5,000 m²",
        budget: "Confidential",
        team: "25+ professionals",
        duration: "8 months",
      },
    },
    "2": {
      title: "Civil Servants Housing Scheme",
      category: "Residential",
      year: "2006-2007",
      location: "Kileleshwa, Nairobi",
      description:
        "Large-scale residential housing development in Nairobi. A prestigious project featuring multiple residential units with modern amenities.",
      fullDescription:
        "This large-scale residential housing scheme in Kileleshwa, Nairobi, showcases our ability to manage complex multi-unit residential projects. The development features modern architecture, quality construction, and excellent finishing.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
      ],
      features: [
        "Multiple residential units",
        "Modern architectural design",
        "Quality finishes",
        "Secure compound",
        "Professional management",
      ],
      stats: {
        area: "12,000 m²",
        budget: "Confidential",
        team: "40+ professionals",
        duration: "18 months",
      },
    },
    "3": {
      title: "Sameer Business Park",
      category: "Commercial",
      year: "2008-2009",
      location: "Nairobi",
      description:
        "Premium commercial business park complex. A state-of-the-art facility designed for modern businesses.",
      fullDescription:
        "Sameer Business Park is a premium commercial complex that demonstrates our expertise in large-scale commercial construction. The project features modern office spaces, retail areas, and professional facilities.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
      ],
      features: [
        "Modern office spaces",
        "Retail facilities",
        "Professional design",
        "Energy-efficient systems",
        "Ample parking",
      ],
      stats: {
        area: "15,000 m²",
        budget: "Confidential",
        team: "50+ professionals",
        duration: "20 months",
      },
    },
    "4": {
      title: "Nine West Commercial Complex",
      category: "Commercial",
      year: "2010-2011",
      location: "Ngong Road, Nairobi",
      description: "High-end commercial retail space on Ngong Road. A premium retail destination.",
      fullDescription:
        "Located on the prestigious Ngong Road, this commercial complex features high-end retail spaces designed for premium brands and businesses.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
      ],
      features: [
        "Premium retail spaces",
        "Modern design",
        "High visibility location",
        "Professional finishes",
        "Security features",
      ],
      stats: {
        area: "8,000 m²",
        budget: "Confidential",
        team: "30+ professionals",
        duration: "14 months",
      },
    },
    "5": {
      title: "Ndaragwa DCS Office",
      category: "Commercial",
      year: "2012-2013",
      location: "Ndaragwa",
      description: "Government office complex construction. A professional facility for government operations.",
      fullDescription:
        "This government office complex in Ndaragwa was built to the highest standards, featuring modern office spaces and professional facilities.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
      ],
      features: [
        "Government-standard construction",
        "Professional office spaces",
        "Modern facilities",
        "Security features",
        "Quality finishes",
      ],
      stats: {
        area: "6,000 m²",
        budget: "Confidential",
        team: "35+ professionals",
        duration: "16 months",
      },
    },
    "6": {
      title: "Civil Servants Housing - Kiambu",
      category: "Residential",
      year: "2017-2022",
      location: "Kiambu",
      description: "Large-scale residential housing development in Kiambu. Our flagship residential project.",
      fullDescription:
        "This large-scale residential housing development in Kiambu represents our flagship project, showcasing our expertise in managing complex, long-term residential construction projects.",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
      ],
      features: [
        "Multiple residential units",
        "Modern design",
        "Quality construction",
        "Professional management",
        "Excellent finishes",
      ],
      stats: {
        area: "20,000 m²",
        budget: "Confidential",
        team: "60+ professionals",
        duration: "60 months",
      },
    },
  }

  const project = projects[params.id]

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild>
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
      {/* Hero with Image Gallery */}
      <section className="relative h-screen bg-black">
        <img
          src={project.images[currentImageIndex] || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-blue-100">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.fullDescription}</p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`relative h-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      currentImageIndex === i ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="bg-blue-50 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Project Stats</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Project Area</p>
                    <p className="text-lg font-semibold text-foreground">{project.stats.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Duration</p>
                    <p className="text-lg font-semibold text-foreground">{project.stats.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Team Size</p>
                    <p className="text-lg font-semibold text-foreground">{project.stats.team}</p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                  <Calendar className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold text-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                  <Briefcase className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold text-foreground">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button asChild className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg">
                <Link href="/contact">Get a Quotation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">More Projects</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Object.entries(projects)
              .filter(([id]) => id !== params.id)
              .slice(0, 3)
              .map(([id, proj]) => (
                <Link
                  key={id}
                  href={`/portfolio/${id}`}
                  className="flex-shrink-0 w-80 group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-accent overflow-hidden">
                    <img
                      src={proj.images[0] || "/placeholder.svg"}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-all duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{proj.year}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get a Quotation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
