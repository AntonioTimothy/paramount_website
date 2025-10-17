"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: "user" | "bot" }>>([
    { id: "1", text: "Hello! 👋 How can we help you today?", sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now().toString(), text: input, sender: "user" as const }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! Our team will get back to you shortly. You can also call us at +254 720 894859",
        sender: "bot" as const,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary to-accent hover:shadow-2xl text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-out animate-pulse-glow z-40 group"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} className="group-hover:scale-110 transition-all duration-300" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl flex flex-col h-96 animate-scale-in z-40 border border-primary/10">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-t-2xl">
            <h3 className="font-bold text-lg">Paramount Support</h3>
            <p className="text-sm text-blue-100">We typically reply within minutes</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50/30 to-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-primary to-accent text-white rounded-br-none shadow-md"
                      : "bg-muted text-foreground rounded-bl-none border border-primary/10"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-3 border-t border-primary/10 space-y-2">
            <div className="flex gap-2">
              <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary-dark text-white text-xs">
                <Link href="/contact">Contact Form</Link>
              </Button>
              <a
                href="tel:+254720894859"
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-accent hover:bg-accent-dark text-white rounded-md text-xs font-semibold transition-all duration-300"
              >
                <Phone size={14} />
                Call
              </a>
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-primary/10 p-4 flex gap-2 bg-white rounded-b-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-blue-50/50"
            />
            <Button
              onClick={handleSend}
              size="sm"
              className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
