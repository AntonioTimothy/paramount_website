"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Target, Eye, Users, Briefcase, CheckCircle } from "lucide-react"

export default function About() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">About Paramount</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three decades of excellence in construction, building trust and quality structures across Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Paramount Top-Tier Limited was founded with a vision to revolutionize the construction industry in
                Kenya. Starting from humble beginnings, we've grown into one of the most trusted construction companies
                in the region.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 30 years of combined experience, our team has successfully completed more than 150 projects
                ranging from residential homes to large-scale commercial developments and industrial facilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to quality, safety, and client satisfaction has made us the preferred choice for
                developers, corporations, and individuals across Kenya and beyond.
              </p>
            </div>
            <div className="relative h-96 animate-scale-in">
              <img
                src="/modern-construction-office.png"
                alt="Paramount office"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-slide-up border-l-4 border-primary">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-primary flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To offer quality building structures and construction services as demanded by the market, while
                embracing new technologies and continuously expanding our product portfolio to meet evolving client
                needs.
              </p>
            </div>

            <div
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-slide-up border-l-4 border-accent"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Eye className="text-accent flex-shrink-0" size={32} />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading construction provider in Kenya by 2025, recognized for our innovation, reliability,
                and commitment to delivering exceptional value to every client and stakeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-muted-foreground">The values that drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Hard Work",
                description:
                  "We understand that success comes through dedication and effort. We ensure we meet our goals to enable us to meet our clients' goals.",
                icon: Briefcase,
              },
              {
                title: "Integrity",
                description:
                  "We emphasize integrity in our staff and stakeholders, treating it as the foundation of our success and reputation.",
                icon: CheckCircle,
              },
              {
                title: "Delivery",
                description:
                  "We are committed to on-time delivery within the highest standards possible. We don't start what we cannot successfully complete.",
                icon: Award,
              },
              {
                title: "Client Support",
                description:
                  "Our clients are assured of satisfactory delivery including pre-construction consulting, schedule management, and quality control.",
                icon: Users,
              },
            ].map((principle, i) => {
              const Icon = principle.icon
              return (
                <div
                  key={i}
                  className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-primary rounded-xl hover:shadow-lg transition-all duration-300 ease-out animate-slide-up group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-all duration-300 ease-out" />
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-dark transition-all duration-300 ease-out">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-xl text-muted-foreground">Meet the visionaries behind Paramount</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Boniface Mutahi Wahome",
                title: "Managing Director & Founder",
                experience: "30+ Years",
                bio: "A visionary leader with over 30 years of experience in construction, fabrication, and steel work. Boniface has successfully led Paramount through multiple growth phases, establishing it as a trusted name in Kenyan construction.",
                expertise: [
                  "Construction Management",
                  "Project Supervision",
                  "Bill of Quantities",
                  "Structural Engineering",
                ],
                image: "/professional-businessman-construction-manager-port.jpg",
              },
              {
                name: "Sammy Wahome Mutahi",
                title: "Co-Founder & Operations Director",
                experience: "25+ Years",
                bio: "With extensive experience in project management and logistics, Sammy ensures every project runs smoothly from conception to completion. His attention to detail and operational excellence has been key to Paramount's success.",
                expertise: ["Project Management", "Logistics", "Quality Control", "Team Leadership"],
                image: "/placeholder.svg?height=400&width=300",
              },
            ].map((founder, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out animate-slide-up border border-border group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary to-accent overflow-hidden">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 ease-out">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{founder.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{founder.experience} in Construction</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{founder.bio}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Competencies</h2>
            <p className="text-xl text-muted-foreground">What we build best</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Residential Houses",
              "Commercial Buildings",
              "Steel Structures",
              "Warehouses (Go-Downs)",
              "Service Stations",
              "Churches",
              "Schools",
              "Industrial Shades",
              "Interior & Exterior Design",
            ].map((competency, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-blue-50 to-white border border-primary rounded-lg hover:shadow-lg hover:border-primary-dark transition-all duration-300 ease-out animate-slide-up group"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-3">
                  <Award
                    className="text-primary flex-shrink-0 group-hover:scale-110 transition-all duration-300 ease-out"
                    size={24}
                  />
                  <p className="font-semibold text-foreground group-hover:text-primary transition-all duration-300 ease-out">
                    {competency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-blue-100 mb-8">Partner with Paramount for your next construction project</p>
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
