"use client"

import { 
  Star, 
  Quote, 
  MapPin, 
  Building2, 
  Award, 
  Users, 
  CheckCircle,
  ArrowRight,
  Heart,
  Shield,
  ThumbsUp
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James Kipchoge",
      company: "Kipchoge Enterprises",
      role: "CEO",
      text: "Paramount delivered our commercial complex on time and within budget. Their professionalism and attention to detail were exceptional. The NCA 4 certification gave us complete confidence in their capabilities.",
      rating: 5,
      location: "Nairobi, Kenya",
      project: "Commercial Complex",
      duration: "18 months",
      image: "/client-1.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Mary Wanjiru",
      company: "Wanjiru Properties",
      role: "Director",
      text: "We were impressed with the quality of work and the team's commitment to safety. Highly recommended for any construction and interior designing project. Their 30+ years of experience truly shows in their work.",
      rating: 5,
      location: "Kiambu, Kenya",
      project: "Residential Development",
      duration: "24 months",
      image: "/client-2.jpg",
      featured: true
    },
    {
      id: 3,
      name: "David Omondi",
      company: "Omondi Construction",
      role: "Project Manager",
      text: "Working with Paramount as a partner has been seamless. Their expertise and reliability make them a trusted collaborator. Their NCA 4 standards ensure every project meets the highest quality benchmarks.",
      rating: 5,
      location: "Mombasa, Kenya",
      project: "Steel Structure Warehouse",
      duration: "8 months",
      image: "/client-3.jpg"
    },
    {
      id: 4,
      name: "Grace Kariuki",
      company: "Kariuki Developments",
      role: "Founder",
      text: "From consultation to completion, Paramount provided excellent service. Our residential project exceeded expectations. Their team's communication and transparency were outstanding throughout.",
      rating: 5,
      location: "Nairobi, Kenya",
      project: "Luxury Apartments",
      duration: "30 months",
      image: "/client-4.jpg",
      featured: true
    },
    {
      id: 5,
      name: "Peter Mwangi",
      company: "Mwangi Industries",
      role: "Operations Manager",
      text: "The steel structure project was completed with precision. Paramount's technical expertise is unmatched in the industry. Their ability to handle complex industrial projects is remarkable.",
      rating: 5,
      location: "Nakuru, Kenya",
      project: "Industrial Plant",
      duration: "12 months",
      image: "/client-5.jpg"
    },
    {
      id: 6,
      name: "Susan Njeri",
      company: "Njeri Hospitality",
      role: "Owner",
      text: "Our hotel renovation was handled professionally. The team was respectful, efficient, and delivered outstanding results. The project was completed 2 weeks ahead of schedule!",
      rating: 5,
      location: "Kiambu, Kenya",
      project: "Hotel Renovation",
      duration: "6 months",
      image: "/client-6.jpg"
    },
    {
      id: 7,
      name: "John Kamau",
      company: "Kamau Holdings",
      role: "Managing Director",
      text: "Paramount's attention to detail and quality control is exceptional. Our office complex stands as a testament to their craftsmanship and professional approach to construction.",
      rating: 5,
      location: "Nairobi, Kenya",
      project: "Office Complex",
      duration: "20 months",
      image: "/client-7.jpg"
    },
    {
      id: 8,
      name: "Elizabeth Wambui",
      company: "Wambui Schools",
      role: "Principal",
      text: "The school dormitory project was completed with minimal disruption to our operations. Paramount's team was considerate and maintained excellent site safety throughout.",
      rating: 5,
      location: "Thika, Kenya",
      project: "School Dormitory",
      duration: "10 months",
      image: "/client-8.jpg"
    }
  ]

  const stats = [
    { number: "150+", label: "Happy Clients", icon: Users, color: "from-blue-500 to-cyan-500" },
    { number: "98%", label: "Satisfaction Rate", icon: ThumbsUp, color: "from-green-500 to-emerald-500" },
    { number: "30+", label: "Years Experience", icon: Award, color: "from-orange-500 to-amber-500" },
    { number: "NCA 4", label: "Certified Quality", icon: Shield, color: "from-purple-500 to-pink-500" },
  ]

  const featuredTestimonials = testimonials.filter(t => t.featured)
  const regularTestimonials = testimonials.filter(t => !t.featured)

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
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium">98% Client Satisfaction</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Client
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Stories</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover why 150+ clients trust Paramount for their construction projects. Real stories from satisfied customers across Kenya.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              "NCA 4 Certified Quality",
              "30+ Years Experience",
              "150+ Projects Completed",
              "98% Satisfaction Rate"
            ].map((indicator, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-200 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Featured Stories</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from some of our most valued clients about their experience working with Paramount
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredTestimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Client Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-8 h-8 text-blue-400 opacity-20" />
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                          <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                          <p className="text-blue-600 font-semibold">{testimonial.role}</p>
                          <p className="text-slate-600 text-sm">{testimonial.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-slate-500 text-sm mb-1 justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{testimonial.location}</span>
                          </div>
                          <div className="text-slate-600 text-sm">
                            {testimonial.project} • {testimonial.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} p-4 mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <p className="text-blue-200 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">More Client Experiences</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Read what other clients have to say about their Paramount construction journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg hover:translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 truncate">{testimonial.name}</p>
                      <p className="text-blue-600 text-sm font-medium truncate">{testimonial.role}</p>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">The Paramount Experience</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Why clients choose us again and again for their construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "NCA 4 Certified Quality",
                description: "Every project meets the highest construction standards with our NCA 4 certification",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "30+ Years Expertise",
                description: "Three decades of construction excellence and proven project delivery",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Users,
                title: "Client-First Approach",
                description: "Your vision, our execution. We prioritize your needs at every project stage",
                color: "from-orange-500 to-amber-500"
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="text-center group animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-3 mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Join 150+ Satisfied Clients</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Experience Paramount Quality?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's build your vision together with NCA 4 certified construction excellence and 30+ years of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-8 py-6 text-lg"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Work <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>NCA 4 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>30+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4" />
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}