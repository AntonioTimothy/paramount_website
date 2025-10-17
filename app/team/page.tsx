"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Team() {
  const team = [
    {
      name: "Boniface Mutahi Wahome",
      role: "Managing Director",
      experience: "30+ Years",
      specialty: "Construction Management",
      image: "👨‍💼",
    },
    {
      name: "Sammy Wahome Mutahi",
      role: "Operations Director",
      experience: "25+ Years",
      specialty: "Project Management",
      image: "👨‍💼",
    },
    {
      name: "Project Managers",
      role: "Senior Project Managers",
      experience: "15+ Years",
      specialty: "Project Supervision",
      image: "👷",
    },
    {
      name: "Site Agents",
      role: "Experienced Site Agents",
      experience: "10+ Years",
      specialty: "Site Management",
      image: "👷",
    },
    {
      name: "Engineers",
      role: "Structural Engineers",
      experience: "15+ Years",
      specialty: "Structural Design",
      image: "👨‍🔧",
    },
    {
      name: "Skilled Workers",
      role: "Craftsmen & Laborers",
      experience: "Varied",
      specialty: "Construction Execution",
      image: "🔨",
    },
  ]

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out animate-slide-up group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl group-hover:scale-110 transition-all duration-300 ease-out">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-2">Specialty:</p>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Our Team Excels</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Decades of combined experience in construction and project management",
              },
              {
                title: "Dedication",
                description: "Committed to delivering quality work on time and within budget",
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and modern construction methods",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">Let our expert team bring your vision to life</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
