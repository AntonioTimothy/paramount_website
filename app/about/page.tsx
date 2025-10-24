"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  Target, 
  Eye, 
  Users, 
  Briefcase, 
  CheckCircle, 
  Shield,
  FileCheck,
  Building2,
  Certificate,
  Star,
  MapPin,
  Calendar,
  BadgeCheck,
  Ribbon
} from "lucide-react"

// Create a fallback icon component in case of import issues
const FallbackIcon = ({ className }: { className?: string }) => (
  <div className={className}>⚡</div>
)

export default function About() {
  // Safe icon mapping with fallbacks
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Award,
    Target,
    Eye,
    Users,
    Briefcase,
    CheckCircle,
    Shield,
    FileCheck,
    Building2,
    Certificate,
    Star,
    MapPin,
    Calendar,
    BadgeCheck,
    Ribbon
  }

  const getIconComponent = (iconName: string): React.ComponentType<any> => {
    return iconMap[iconName] || FallbackIcon
  }

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
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">30+ Years of Excellence</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Building Kenya's
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Legacy</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Three decades of construction excellence, certified quality, and unwavering commitment to building Kenya's future with integrity and innovation.
          </p>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Certifications & Licenses</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fully licensed and certified construction consultants meeting Kenya's highest industry standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Certificate",
                title: "NCA 4 License",
                description: "National Construction Authority Category 4 - Building Construction Works",
                status: "Active",
                validity: "2025-2026",
                badge: "NCA4",
                color: "from-blue-600 to-cyan-600"
              },
              {
                icon: "Shield",
                title: "Certificate of Registration",
                description: "Registered Constructor for Building Works under Kenyan Law",
                status: "Active",
                validity: "Permanent",
                badge: "CRB",
                color: "from-green-600 to-emerald-600"
              },
              {
                icon: "FileCheck",
                title: "Annual Practice License",
                description: "Valid Annual Construction Practice License 2024/2025",
                status: "Active",
                validity: "2025-2026",
                badge: "APL",
                color: "from-purple-600 to-pink-600"
              },
              {
                icon: "Building2",
                title: "NSA Certification",
                description: "National Safety Authority Certified Construction Firm",
                status: "Certified",
                validity: "2025-2026",
                badge: "NSA",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "BadgeCheck",
                title: "Quality Management",
                description: "ISO 9001:2015 Quality Management System Certified",
                status: "Certified",
                validity: "2024-2026",
                badge: "ISO",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: "Ribbon",
                title: "Safety Compliance",
                description: "OSH Compliance Certificate for Construction Operations",
                status: "Compliant",
                validity: "2025-2026",
                badge: "OSH",
                color: "from-teal-600 to-cyan-600"
              }
            ].map((cert, i) => {
              const IconComponent = getIconComponent(cert.icon)
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} p-3 mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cert.color}`}>
                      {cert.badge}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{cert.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Status:</span>
                      <span className="font-semibold text-green-600">{cert.status}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Validity:</span>
                      <span className="font-semibold text-slate-700">{cert.validity}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Legacy</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize Kenya's construction landscape, Paramount Top-Tier Limited has evolved from humble beginnings into a premier construction powerhouse. Our journey spans over three decades of dedicated service and innovation.
                </p>
                <p>
                  With our <strong>NCA Category 4 license</strong> and comprehensive certifications, we are authorized to undertake complex building construction projects of any scale, ensuring compliance with all Kenyan construction regulations and international quality standards.
                </p>
                <p>
                  Our portfolio includes <strong>150+ successfully completed projects</strong>, ranging from bespoke residential homes to large-scale commercial complexes and industrial facilities, each bearing our hallmark of excellence and precision.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "30+", label: "Years Experience" },
                  { number: "150+", label: "Projects Completed" },
                  { number: "NCA 4", label: "License Category" },
                  { number: "98%", label: "Client Satisfaction" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/construction.jpg"
                  alt="Paramount Construction Office"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">NCA 4</div>
                  <div className="text-slate-600">Licensed Category</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To deliver exceptional construction services through certified quality standards, innovative technologies, and professional excellence, while continuously expanding our capabilities to meet evolving market demands and client expectations.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be East Africa's most trusted construction partner by 2025, recognized for our NCA 4 certified expertise, sustainable building practices, and unwavering commitment to shaping Kenya's architectural landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">The principles that guide every project we undertake</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "Briefcase",
                title: "Professional Excellence",
                description: "Maintaining NCA 4 standards and continuous professional development",
                features: ["Certified Professionals", "Quality Assurance", "Continuous Training"]
              },
              {
                icon: "Shield",
                title: "Integrity & Compliance",
                description: "Full compliance with Kenyan construction laws and ethical standards",
                features: ["Legal Compliance", "Ethical Practices", "Transparent Operations"]
              },
              {
                icon: "Award",
                title: "Quality Delivery",
                description: "Commitment to on-time delivery within the highest quality standards",
                features: ["Timely Completion", "Quality Materials", "Precision Workmanship"]
              },
              {
                icon: "Users",
                title: "Client Partnership",
                description: "Building lasting relationships through exceptional client support",
                features: ["Client Consultation", "After-Sales Support", "Relationship Building"]
              }
            ].map((value, i) => {
              const IconComponent = getIconComponent(value.icon)
              return (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-2 mb-6 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-blue-200 mb-6 leading-relaxed">{value.description}</p>
                  <ul className="space-y-2">
                    {value.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-blue-100 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Leadership</h2>
            <p className="text-xl text-slate-600">Certified professionals leading Kenya's construction excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "Boniface Mutahi Wahome",
                title: "Managing Director & Founder",
                experience: "30+ Years",
                certification: "NCA Certified Constructor",
                bio: "A visionary leader with over 30 years of expertise in construction management, structural engineering, and project supervision. Boniface holds multiple construction certifications and has successfully led Paramount through significant growth phases.",
                expertise: [
                  "Construction Management",
                  "Structural Engineering",
                  "Project Supervision",
                  "Quality Control"
                ],
                image: "/boniface.png",
              },
              {
                name: "Sammy Wahome Mutahi",
                title: "Operations Director",
                experience: "10+ Years",
                certification: "Certified Project Manager",
                bio: "With extensive experience in construction operations and logistics, Sammy ensures every project adheres to NCA standards and client specifications. His operational excellence has been instrumental in maintaining our 98% client satisfaction rate.",
                expertise: ["Project Management", "Logistics", "Safety Compliance", "Team Leadership"],
                image: "/sami.png",
              },
            ].map((leader, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300"
              >
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {leader.certification}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">{leader.title}</p>
                  <p className="text-sm text-slate-600 mb-4 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {leader.experience} in Construction
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{leader.bio}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-slate-900">Areas of Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium border border-slate-200">
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

      {/* Service Competencies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600">NCA 4 licensed services for comprehensive construction solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Residential Housing Developments",
              "Commercial Office Buildings",
              "Steel Structure Warehouses",
              "Industrial Manufacturing Plants",
              "Educational Institutions",
              "Healthcare Facilities",
              "Religious Buildings",
              "Retail Complexes",
              "Hospitality Projects",
              "Infrastructure Works",
              "Interior Fit-Outs",
              "Building Renovations"
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Build with Confidence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with NCA 4 certified construction experts. Get a detailed quote for your next project with guaranteed quality and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <Link href="/contact">Get Certified Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-8 py-6 text-lg"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" />
              <span>NCA 4 Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Fully Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nationwide Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}