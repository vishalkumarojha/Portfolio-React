"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Home, Info, Users, Image, HelpCircle, Briefcase, Award, BookOpen, Code, Mail } from "lucide-react"
import SocialModal from "./SocialModal"

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [socialModalOpen, setSocialModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleSocialModal = () => {
    setSocialModalOpen(!socialModalOpen)
    if (menuOpen) setMenuOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="h-5 w-5" /> },
    { name: "About", href: "#about", icon: <Info className="h-5 w-5" /> },
    { name: "Skills", href: "#skills", icon: <Code className="h-5 w-5" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Achievements", href: "#achievements", icon: <Award className="h-5 w-5" /> },
    { name: "Education", href: "#education", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Experience", href: "#internship", icon: <Users className="h-5 w-5" /> },
    { name: "Gallery", href: "#about", icon: <Image className="h-5 w-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
    { name: "FAQ", href: "#certification", icon: <HelpCircle className="h-5 w-5" /> },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-lg font-semibold">Vishal Kumar Ojha</span>
          <span className="text-sm text-gray-500">Student | Developer</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.slice(0, 7).map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-sm font-medium hover:text-gray-600 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleSocialModal} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Connect With Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleSocialModal} className="text-sm font-medium hover:text-gray-600 transition-colors">
            Connect
          </button>
          <button onClick={toggleMenu} className="flex items-center p-2" aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b">
          <div className="flex items-center">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67a936a000306ebb2683/view?project=67a074a3000f8ad60523&mode=admin"
              alt="Profile"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <div className="font-semibold">Vishal Kumar Ojha</div>
              <div className="text-xs text-gray-500">VIT Bhopal University</div>
            </div>
          </div>
        </div>
        <ul className="p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center py-3 px-5 text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={closeMenu}
              >
                <span className="mr-3 text-gray-500">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleSocialModal}
              className="flex items-center py-3 px-5 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
            >
              <span className="mr-3 text-gray-500">
                <Users className="h-5 w-5" />
              </span>
              Connect With Me
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}

      {/* Social Modal */}
      {socialModalOpen && <SocialModal onClose={toggleSocialModal} />}
    </nav>
  )
}

export default Navbar

