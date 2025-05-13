"use client"

import type React from "react"

import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Add document to Firestore
      await addDoc(collection(db, "newsletterSubscriptions"), {
        email: email,
        timestamp: serverTimestamp(),
      })

      setSuccess(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err) {
      setError("Failed to subscribe. Please try again.")
      console.error("Newsletter subscription error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="newsletter" className="py-16 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to my newsletter</h2>
            <p className="text-gray-300 leading-relaxed">
              Get the latest articles, tutorials, and updates on web development and design directly to your inbox. I
              send out newsletters once a month with valuable content and no spam.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
                disabled={loading}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-colors disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {success && (
              <div className="p-3 bg-green-900/30 text-green-400 rounded-md text-center mb-3">
                Thanks for subscribing!
              </div>
            )}
            {error && <div className="p-3 bg-red-900/30 text-red-400 rounded-md text-center mb-3">{error}</div>}
            <p className="text-sm text-gray-400">I respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
