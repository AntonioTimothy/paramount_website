"use client"

import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Kipchoge",
      company: "Kipchoge Enterprises",
      role: "CEO",
      text: "Paramount delivered our commercial complex on time and within budget. Their professionalism and attention to detail were exceptional.",
      rating: 5,
      location: "Nairobi, Kenya",
    },
    {
      name: "Mary Wanjiru",
      company: "Wanjiru Properties",
      role: "Director",
      text: "We were impressed with the quality of work and the team's commitment to safety. Highly recommended for any construction and interior designing project.",
      rating: 5,
      location: "Kiambu, Kenya",
    },
    {
      name: "David Omondi",
      company: "Omondi Construction",
      role: "Project Manager",
      text: "Working with Paramount as a partner has been seamless. Their expertise and reliability make them a trusted collaborator.",
      rating: 5,
      location: "Mombasa, Kenya",
    },
    {
      name: "Grace Kariuki",
      company: "Kariuki Developments",
      role: "Founder",
      text: "From consultation to completion, Paramount provided excellent service. Our residential project exceeded expectations.",
      rating: 5,
      location: "Nairobi, Kenya",
    },
    {
      name: "Peter Mwangi",
      company: "Mwangi Industries",
      role: "Operations Manager",
      text: "The steel structure project was completed with precision. Paramount's technical expertise is unmatched in the industry.",
      rating: 5,
      location: "Nakuru, Kenya",
    },
    {
      name: "Susan Njeri",
      company: "Njeri Hospitality",
      role: "Owner",
      text: "Our hotel renovation was handled professionally. The team was respectful, efficient, and delivered outstanding results.",
      rating: 5,
      location: "Kiambu, Kenya",
    },
  ]

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What our satisfied clients say about working with Paramount
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-blue-50 to-white border border-primary rounded-xl hover:shadow-lg transition-all duration-300 ease-out animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="border-t border-primary pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Happy Clients" },
              { number: "100+", label: "Projects Completed" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "30+", label: "Years in Business" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl text-blue-100 mb-8">Experience the Paramount difference in your next project</p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
