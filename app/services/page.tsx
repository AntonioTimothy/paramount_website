"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      icon: "🏠",
      description: "Beautiful, durable homes built with precision and quality materials",
      features: [
        "Custom home design and construction",
        "Quality materials and craftsmanship",
        "Timely project completion",
        "Professional project management",
        "Interior and exterior finishing",
        "Post-construction support",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      icon: "🏢",
      description: "State-of-the-art commercial spaces designed for modern businesses",
      features: [
        "Office buildings and complexes",
        "Retail spaces and shopping centers",
        "Multi-story developments",
        "Modern architectural design",
        "Energy-efficient systems",
        "Flexible space configurations",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "steel",
      title: "Steel Structures",
      icon: "🏭",
      description: "Durable industrial structures for warehouses and facilities",
      features: [
        "Warehouse construction",
        "Industrial facilities",
        "Steel fabrication",
        "Structural engineering",
        "Heavy-duty construction",
        "Maintenance and repairs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mechanical",
      title: "Mechanical Engineering",
      icon: "🔧",
      description: "Expert mechanical systems installation and integration",
      features: [
        "HVAC systems",
        "Plumbing installation",
        "Electrical systems",
        "Fire safety systems",
        "Building automation",
        "System maintenance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "interior",
      title: "Interior & Exterior Design",
      icon: "🎨",
      description: "Creative design solutions that transform spaces",
      features: [
        "Interior space planning",
        "Exterior facade design",
        "Landscape design",
        "Material selection",
        "Color and lighting design",
        "Sustainable design solutions",
      ],
      image: "/modern-interior-design-office-space.jpg",
    },
    {
      id: "renovation",
      title: "Renovation & Restoration",
      icon: "🔄",
      description: "Professional renovation and restoration services",
      features: [
        "Building renovation",
        "Structural repairs",
        "Modernization upgrades",
        "Heritage restoration",
        "Damage restoration",
        "Quality finishing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your specific needs and requirements
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  i % 2 === 1 ? "lg:grid-cols-2 lg:auto-cols-fr" : ""
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3 group">
                        <CheckCircle
                          className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 ease-out"
                          size={20}
                        />
                        <span className="text-muted-foreground group-hover:text-foreground transition-all duration-300 ease-out">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                    <Link href="/contact">Get a Quotation</Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={`relative h-96 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">How we deliver excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision and requirements" },
              { step: "02", title: "Planning", desc: "Develop detailed project plans and schedules" },
              { step: "03", title: "Execution", desc: "Build with precision and quality control" },
              { step: "04", title: "Delivery", desc: "Complete handover with full support" },
            ].map((item, i) => (
              <div key={i} className="relative animate-slide-up group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out border border-border group-hover:border-primary">
                  <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-all duration-300 ease-out">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 ease-out">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and detailed project quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Request a Quotation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
