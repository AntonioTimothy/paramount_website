"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              </div>

              {[
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+254 720 894859", "+254 700 517196"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["paramounttoptiers@gmail.com"],
                },
                {
                  icon: MapPin,
                  title: "Address",
                  details: ["P.O. Box 20", "Kiambu 00900", "Kenya"],
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.icon className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    {item.details.map((detail, j) => (
                      <p key={j} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-scale-in">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-primary">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg animate-slide-down">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="residential">Residential Project</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="steel">Steel Structures</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-dark text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">Visit Us</h2>
            <p className="text-xl text-muted-foreground">Located in Kiambu, Kenya</p>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white text-center animate-scale-in">
            <div>
              <div className="text-6xl mb-4">📍</div>
              <p className="text-xl font-semibold">Kiambu, Kenya</p>
              <p className="text-blue-100">P.O. Box 20, Kiambu 00900</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is ready to discuss your project and provide expert guidance
          </p>
        </div>
      </section>
    </div>
  )
}
