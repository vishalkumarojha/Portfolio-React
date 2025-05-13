"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Check if Firebase is initialized
      if (!db) {
        throw new Error("Firebase is not initialized. Please check your environment configuration.")
      }

      // Add document to Firestore
      await addDoc(collection(db, "contactSubmissions"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      })

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset the success state after 5 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } catch (err) {
      console.error("Error submitting contact form:", err)
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white/5 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Contact Me</h2>
        <p className="text-gray-500 mb-8 text-center">Get in touch for collaborations or inquiries</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/80 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              {success && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {error && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    disabled={loading}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    disabled={loading}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white/80 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Email</h4>
                    <a
                      href="mailto:work.vishalojha@gmail.com"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      work.vishalojha@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-black transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">VIT Bhopal University, Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Book a Consultation</h3>
              <p className="text-gray-600 mb-4">
                Want to discuss a project or get personalized advice? Book a one-on-one consultation with me through
                Topmate.
              </p>
              <a
                href="https://topmate.io/vishal_ojha10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors inline-block"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
