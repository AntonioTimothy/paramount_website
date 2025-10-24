"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Home, 
  Building2, 
  Factory, 
  Wrench, 
  Palette,
  RefreshCw,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  Star,
  BadgeCheck
} from "lucide-react"

// Create a fallback icon component
const FallbackIcon = ({ className }: { className?: string }) => (
  <div className={className}>⚡</div>
)

// Safe icon mapping
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Home,
  Building2,
  Factory,
  Wrench,
  Palette,
  RefreshCw,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Award,
  Star,
  BadgeCheck,
  CheckCircle
}

const getIconComponent = (iconName: string): React.ComponentType<any> => {
  return iconMap[iconName] || FallbackIcon
}

export default function Services() {
  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      icon: "Home",
      description: "Beautiful, durable homes built with precision, quality materials, and NCA 4 certified standards",
      features: [
        "Custom home design and construction",
        "Quality materials and craftsmanship",
        "Timely project completion",
        "Professional project management",
        "Interior and exterior finishing",
        "Post-construction support",
      ],
      image: "/commercial.jpg",
      stats: "150+ Homes Built",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "commercial",
      title: "Commercial Buildings",
      icon: "Building2",
      description: "State-of-the-art commercial spaces designed for modern businesses with full compliance",
      features: [
        "Office buildings and complexes",
        "Retail spaces and shopping centers",
        "Multi-story developments",
        "Modern architectural design",
        "Energy-efficient systems",
        "Flexible space configurations",
      ],
      image: "/sameer1.jpg",
      stats: "50+ Commercial Projects",
      color: "from-green-500 to-emerald-500"
    },
   
   
    {
      id: "renovation",
      title: "Renovation & Restoration",
      icon: "RefreshCw",
      description: "Professional renovation and restoration services to revitalize existing structures",
      features: [
        "Building renovation",
        "Structural repairs",
        "Modernization upgrades",
        "Heritage restoration",
        "Damage restoration",
        "Quality finishing",
      ],
      image: "/building-renovation-restoration.jpg",
      stats: "40+ Renovation Projects",
      color: "from-teal-500 to-cyan-500"
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "Comprehensive project analysis and detailed planning with NCA compliance",
      icon: "Users",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Design & Approval",
      description: "Architectural design development and regulatory approvals",
      icon: "Award",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Construction & Quality Control",
      description: "Precision construction with continuous quality monitoring",
      icon: "Shield",
      color: "from-orange-500 to-amber-500"
    },
    {
      step: "04",
      title: "Completion & Handover",
      description: "Final inspection, documentation, and professional handover",
      icon: "BadgeCheck",
      color: "from-purple-500 to-pink-500"
    },
  ]

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
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">NCA 4 Certified Services</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Premium Construction
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction solutions backed by 30+ years of expertise, NCA 4 certification, and unwavering commitment to quality excellence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "30+", label: "Years Experience" },
              { number: "NCA 4", label: "License Category" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon)
              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                    index % 2 === 1 ? "lg:grid-cols-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 shadow-lg`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{service.title}</h2>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                        {service.stats}
                      </span>
                    </div>
                    
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3 group">
                          <CheckCircle
                            className="text-green-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300"
                            size={20}
                          />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-8 py-6">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Free Quote <ArrowRight size={20} />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative h-96 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-2xl border border-slate-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900">NCA 4</div>
                        <div className="text-slate-600 text-sm">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the Paramount difference with our certified expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "NCA 4 Certified",
                description: "Fully licensed and certified under the highest construction category in Kenya",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "Award",
                title: "Quality Guaranteed",
                description: "30+ years of delivering exceptional quality and precision in every project",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "Clock",
                title: "On-Time Delivery",
                description: "Proven track record of completing projects within schedule and budget",
                color: "from-orange-500 to-amber-500"
              },
            ].map((feature, i) => {
              const IconComponent = getIconComponent(feature.icon)
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              A systematic approach to delivering construction excellence with NCA 4 standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const IconComponent = getIconComponent(step.icon)
              return (
                <div key={i} className="relative group text-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 h-full group-hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-3 mb-6 mx-auto group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">{step.description}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600">Comprehensive solutions for complete project success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Project Management & Supervision",
              "Construction Consultancy",
              "Site Analysis & Feasibility Studies",
              "Bill of Quantities Preparation",
              "Building Permits & Approvals",
              "Quality Control & Assurance",
              "Safety Compliance Management",
              "Post-Construction Maintenance",
              "Structural Integrity Assessment",
              "Environmental Impact Assessment",
              "Cost Estimation & Budgeting",
              "Contract Administration"
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service}
                  </span>
                </div>
              </div>
            ))}
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get a detailed, no-obligation quote from our NCA 4 certified construction experts. Let's build something extraordinary together.
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
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Portfolio <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" />
              <span>NCA 4 Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}