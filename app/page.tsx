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
} from "lucide-react"
import HeroSlider from "@/components/hero-slider"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Years Experience", icon: Award },
              { number: "150+", label: "Projects Completed", icon: Briefcase },
              { number: "65+", label: "Team Members", icon: Users },
              { number: "98%", label: "Client Satisfaction", icon: CheckCircle },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center animate-slide-up group" style={{ animationDelay: `${i * 100}ms` }}>
                  <Icon className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-all duration-300 ease-out animate-bounce-slow" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To deliver exceptional construction services that exceed client expectations through quality, innovation, and professional excellence.",
                color: "from-primary to-primary-light",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description:
                  "To be the leading construction provider in East Africa by 2025, known for reliability, innovation, and sustainable building practices.",
                color: "from-accent to-accent-light",
              },
              {
                icon: TrendingUp,
                title: "Our Values",
                description:
                  "Hard Work, Integrity, Timely Delivery, and Exceptional Client Support form the foundation of everything we do.",
                color: "from-primary-light to-accent",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 animate-slide-up shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-6 group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Commercial Buildings",
                description: "State-of-the-art commercial spaces for modern businesses",
                image: "/modern-commercial-office-building.jpg",
              },
              {
                icon: Award,
                title: "Steel Structures",
                description: "Durable industrial structures for warehouses and facilities",
                image: "/industrial-steel-structure-warehouse.jpg",
              },
              {
                icon: Zap,
                title: "Mechanical Engineering",
                description: "Expert mechanical systems installation and integration",
                image: "/mechanical-engineering-hvac-systems.jpg",
              },
              {
                icon: Shield,
                title: "Interior Design",
                description: "Creative interior and exterior design solutions",
                image: "/modern-interior-design-office-space.jpg",
              },
              {
                icon: CheckCircle,
                title: "Renovation",
                description: "Professional renovation and restoration services",
                image: "/building-renovation-restoration.jpg",
              },
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-slide-up border border-primary/10 hover:border-primary/30"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden relative">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2 mb-3 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 ease-out">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-blue-50 bg-transparent"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg">
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Why Choose Paramount?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Quality Assurance",
                    desc: "Rigorous quality control at every stage of construction",
                  },
                  { icon: Shield, title: "Safety First", desc: "Comprehensive safety protocols and training" },
                  { icon: Zap, title: "On-Time Delivery", desc: "Consistent project completion within schedule" },
                  { icon: Users, title: "Expert Team", desc: "Experienced professionals with proven track record" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 group animate-slide-in-left"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-2 flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-all duration-300 ease-out">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 animate-scale-in">
              <img
                src="/construction-team-workers-on-site-professional.jpg"
                alt="Construction team"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Showcase of our recent completed works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Civil Servants Housing - Kiambu",
                year: "2017-2022",
                category: "Residential",
                image: "/residential-housing-development-kiambu-kenya.jpg",
              },
              {
                title: "Ndaragwa DCS Office",
                year: "2012-2013",
                category: "Commercial",
                image: "/government-office-building-construction.jpg",
              },
              {
                title: "Sameer Business Park",
                year: "2008-2009",
                category: "Commercial",
                image: "/business-park-commercial-complex.jpg",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-scale-in border border-primary/10 hover:border-primary/30"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 ease-out"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                    <span className="text-sm text-muted-foreground font-semibold">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-all duration-300 ease-out">
                    {project.title}
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-blue-50 bg-transparent"
                  >
                    <Link href="/portfolio">View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">How we bring your vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision and requirements" },
              { step: "02", title: "Planning", desc: "Detailed project planning and design" },
              { step: "03", title: "Execution", desc: "Professional construction and management" },
              { step: "04", title: "Delivery", desc: "Quality handover and support" },
            ].map((item, i) => (
              <div key={i} className="relative group animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 h-full group-hover:shadow-xl">
                  <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 animate-gradient-shift">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and detailed project quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
