"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "South Sudan School Dormitory",
      category: "residential",
      year: "2005",
      location: "South Sudan",
      description: "Modern dormitory facility for Madam Rebeca Ngaran",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
    },
    {
      id: 2,
      title: "Civil Servants Housing Scheme",
      category: "residential",
      year: "2006-2007",
      location: "Kileleshwa, Nairobi",
      description: "Large-scale residential housing development",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
    },
    {
      id: 3,
      title: "Sameer Business Park",
      category: "commercial",
      year: "2008-2009",
      location: "Nairobi",
      description: "Premium commercial business park complex",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.20.56_52791fca-DvXwqbhQqqxdMxW4YZsAsjDidJKRG6.jpg",
    },
    {
      id: 4,
      title: "Nine West Commercial Complex",
      category: "commercial",
      year: "2010-2011",
      location: "Ngong Road, Nairobi",
      description: "High-end commercial retail space",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.26_94576768-RqTFoMXoyluNrAEhIdsXYmIReMcxMW.jpg",
    },
    {
      id: 5,
      title: "Ndaragwa DCS Office",
      category: "commercial",
      year: "2012-2013",
      location: "Ndaragwa",
      description: "Government office complex construction",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.18.27_8334c472-UxPxwgcZ3N0sCRUhzpXMJYKHm5ubnz.jpg",
    },
    {
      id: 6,
      title: "Civil Servants Housing - Kiambu",
      category: "residential",
      year: "2017-2022",
      location: "Kiambu",
      description: "Large-scale residential housing development",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-17%20at%2014.21.15_39bf50ed-W0OPYHHFkbu4On4sXGHaQCfYOmOy1v.jpg",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
  ]

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of our completed projects across Kenya and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-border sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-out ${
                  filter === cat.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-gray-200 border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-scale-in border border-border hover:border-primary"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 ease-out"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary bg-blue-100 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                    <span className="text-sm text-muted-foreground font-semibold">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 ease-out">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-blue-50 bg-transparent"
                  >
                    <Link href={`/portfolio/${project.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Impressed by Our Work?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss your next construction project</p>
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
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
