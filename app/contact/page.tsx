"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Send,
  Building2,
  Shield,
  Award,
  Star,
  CheckCircle
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsLoading(false)
    
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">Get Your Free Quote Today</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Let's Build
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact our NCA 4 certified experts for a free consultation and detailed quote.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              "NCA 4 Certified Quality",
              "30+ Years Experience",
              "Free Consultation",
              "98% Client Satisfaction"
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-blue-200 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team of NCA 4 certified construction experts is ready to discuss your project and provide professional guidance.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: ["+254 720 894859", "+254 700 517196"],
                    description: "Speak directly with our project managers",
                    color: "from-green-500 to-emerald-500",
                    action: "tel:+254720894859"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: ["paramounttoptiers@gmail.com"],
                    description: "Send us your project details",
                    color: "from-blue-500 to-cyan-500",
                    action: "mailto:paramounttoptiers@gmail.com"
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: ["Mapa House, Kiambu", "P.O. Box 20, Kiambu 00900"],
                    description: "Our office location in Kiambu",
                    color: "from-orange-500 to-amber-500",
                    action: "#map"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
                    description: "We're here to serve you",
                    color: "from-purple-500 to-pink-500"
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.action}
                    className="block group"
                  >
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-2 flex-shrink-0 group-hover:scale-110 transition-all duration-300`}>
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                        {item.details.map((detail, j) => (
                          <p key={j} className="text-slate-700 text-sm font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Why Choose Paramount?
                </h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>NCA 4 Certified Construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>30+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>150+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free Project Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-2">
                    <Send className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Send us a Message</h3>
                    <p className="text-slate-600">We typically respond within 2 hours</p>
                  </div>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 animate-slide-down">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">Thank you for your message!</span>
                    </div>
                    <p className="text-sm mt-1">We'll get back to you within 2 hours with a detailed response.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-400"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Project Type *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-400 appearance-none bg-white"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Construction</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="steel">Steel Structures</option>
                        <option value="renovation">Renovation & Restoration</option>
                        <option value="interior">Interior Design</option>
                        <option value="consultation">Construction Consultation</option>
                        <option value="other">Other Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-slate-400 resize-none"
                      placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message & Get Free Quote
                      </div>
                    )}
                  </Button>

                  <p className="text-center text-slate-600 text-sm">
                    By submitting this form, you agree to our privacy policy. We respect your data.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location Section */}
      <section id="map" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Located in the heart of Kiambu, our office is easily accessible for project consultations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Container */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group animate-fade-in-up">
              {/* Interactive Map Placeholder with Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mapa House, Kiambu</h3>
                  <p className="text-blue-100">P.O. Box 20, Kiambu 00900, Kenya</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                    <Clock className="w-4 h-4" />
                    Open Monday - Friday, 8AM - 5PM
                  </div>
                </div>
              </div>
              
              {/* Animated Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-red-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-8 w-8 bg-red-500 border-2 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Office Location
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Address</h4>
                    <p className="text-slate-600">Mapa House, Kiambu</p>
                    <p className="text-slate-600">P.O. Box 20, Kiambu 00900</p>
                    <p className="text-slate-600">Kenya</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Getting Here</h4>
                    <ul className="text-slate-600 space-y-1 text-sm">
                      <li>• 30 minutes from Nairobi CBD</li>
                      <li>• Accessible via Thika Super Highway</li>
                      <li>• Ample parking available</li>
                      <li>• Public transport accessible</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Before You Visit</h4>
                    <p className="text-slate-600 text-sm">
                      We recommend scheduling an appointment to ensure our project managers are available to give you their full attention.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6 text-lg rounded-xl">
                <a href="tel:+254720894859" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call to Schedule Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">NCA 4 Certified Excellence</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 150+ satisfied clients who trust Paramount for their construction needs. Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-xl px-8 py-6 text-lg">
              <a href="tel:+254720894859" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent font-semibold rounded-xl px-8 py-6 text-lg"
            >
              <a href="mailto:paramounttoptiers@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Quick Response Promise */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto">
            <div className="flex items-center gap-3 text-blue-100">
              <Clock className="w-5 h-5 text-green-400" />
              <div className="text-left">
                <p className="font-semibold">Quick Response Guarantee</p>
                <p className="text-sm">We respond to all inquiries within 2 hours during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}