"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  credentialId: string | null
  link: string
  image: string
}

const Certification: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null)

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "April 2025",
      credentialId: "532db4bc7aca",
      link: "https://www.hackerrank.com/certificates/532db4bc7aca",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 2,
      title: "Blockchain and its Applications",
      issuer: "NPTEL",
      date: "May 2025",
      credentialId: "NPTEL25CS08S559800139",
      link: "https://drive.google.com/drive/folders/12T7ivHL2kSXeIIRqnxPhiVM8DAjtOedN",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 3,
      title: "Software Engineer",
      issuer: "HackerRank",
      date: "April 2025",
      credentialId: "9e5ba78d1285",
      link: "https://www.hackerrank.com/certificates/iframe/9e5ba78d1285",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      issuer: "FreeCodeCamp",
      date: "April 2025",
      credentialId: "vishalojha628-dawp",
      link: "https://www.freecodecamp.org/certification/VishalOjha628/data-analysis-with-python-v7",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 5,
      title: "Postman API Fundamentals Student Expert",
      issuer: "Canvas Credentials (Badgr)",
      date: "August 2024",
      credentialId: "66b3cc1496c27f332a3fb82d",
      link: "https://api.badgr.io/public/assertions/1l_ZTrgTTbeMAHqgWD4asg",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 6,
      title: "Front End Development Libraries",
      issuer: "FreeCodeCamp",
      date: "July 2024",
      credentialId: "vishalojha628-fedl",
      link: "https://freecodecamp.org/certification/VishalOjha628/front-end-development-libraries",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 7,
      title: "Introduction to Android Mobile Application Development ",
      issuer: "Meta",
      date: "June 2024",
      credentialId: "AQJ82UW6D83F",
      link: "https://www.coursera.org/account/accomplishments/records/AQJ82UW6D83F",
      image: "/placeholder.svg?height=800&width=1200",
    },
    // {
    //   id: 8,
    //   title: "Project-Based Learning: Build an AI Text Summarizer app",
    //   issuer: "Postman",
    //   date: "Aug 2024",
    //   credentialId: null,
    //   link: "http://verify.skilljar.com/c/3krc5o2c2ssd",
    //   image: "/placeholder.svg?height=800&width=1200",
    // },
    {
      id: 9,
      title: "Java",
      issuer: "HackerRank",
      date: "June 2024",
      credentialId: "5505406596E5",
      link: "https://www.hackerrank.com/certificates/5505406596e5",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 10,
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "June 2024",
      credentialId: "E43737655AD7",
      link: "https://www.hackerrank.com/certificates/e43737655ad7",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 11,
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "June 2024",
      credentialId: "1309C3DFA0D7",
      link: "https://www.hackerrank.com/certificates/1309c3dfa0d7",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 12,
      title: "React",
      issuer: "HackerRank",
      date: "June 2024",
      credentialId: "40550EC3A401",
      link: "https://www.hackerrank.com/certificates/40550ec3a401",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 13,
      title: "SQL(Intermediate)",
      issuer: "HackerRank",
      date: "June 2024",
      credentialId: "38F05BBE84A2",
      link: "https://www.hackerrank.com/certificates/38f05bbe84a2",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 14,
      title: "Matlab Onramp",
      issuer: "MathWorks",
      date: "August 2023",
      credentialId: "E43737655AD7",
      link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=dedcd80b-77bf-4070-846e-ce673de62b27&",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 15,
      title: "Fundamentals of AI and ML",
      issuer: "Vityarthi",
      date: "April 2024",
      credentialId: "8af9f678ab",
      link: "https://vityarthi.com/certificate/8af9f678ab",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 16,
      title: "Python Essentials",
      issuer: "Vityarthi",
      date: "June 2024",
      credentialId: "c61887ff8c",
      link: "https://vityarthi.com/certificate/c61887ff8c",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 17,
      title: "Using MongoDB with Java",
      issuer: "MongoDB University",
      date: "July 2024",
      credentialId: "MDBxlub2dcldf",
      link: "https://learn.mongodb.com/c/j8bXl68wTsu9aNGIkd9LWQ",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 18,
      title: "MongoDB Aggregation with Java",
      issuer: "MongoDB University",
      date: "July 2024",
      credentialId: "MDB4hma3kwnyc",
      link: "https://learn.mongodb.com/c/G61th1-FTymaX9C2lRtLFg",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 19,
      title: "MongoDB CRUD Operations in Java",
      issuer: "MongoDB University",
      date: "July 2024",
      credentialId: "MDBuy3xd8zfon",
      link: "https://learn.mongodb.com/c/zBP0Wvz5S2a9S6CpSw9z1g",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 20,
      title: "MongoDB and the Document Model",
      issuer: "MongoDB University",
      date: "July 2024",
      credentialId: "MDBmj3r8l8ia0",
      link: "https://learn.mongodb.com/c/zmLiG3gRTxGbhmQOmKVk4A",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 21,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "June 2024",
      credentialId: "vishalojha628-rwd",
      link: "https://freecodecamp.org/certification/vishalojha628/responsive-web-design",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 22,
      title: "Version control with Git",
      issuer: "Microsoft",
      date: "June 2024",
      credentialId: "ML-234567",
      link: "https://learn.microsoft.com/en-us/users/vishalkumarojha-4606/achievements/print/9fbtvfpu?username=VishalKumarOjha-4606&section=activity&tab=tab-learning-paths",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 23,
      title: "Tailwind CSS Mega Course",
      issuer: "Udemy",
      date: "June 2024",
      credentialId: null,
      link: "https://www.udemy.com/certificate/UC-56ee60f4-6a27-4a0a-b208-fbfd56d42315/",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 24,
      title: "Bootstrap 5 Course",
      issuer: "Udemy",
      date: "June 2024",
      credentialId: null,
      link: "https://www.udemy.com/certificate/UC-06c126bc-a55c-4d20-8f0e-7f53fc5ab1a7/",
      image: "/placeholder.svg?height=800&width=1200",
    },
    {
      id: 25,
      title: "AWS Certified Advanced Netwrking - Speciality",
      issuer: "Udemy",
      date: "June 2024",
      credentialId: "UC-b6fe4c60-d6f1-4d95-8c59-49d1af9c958",
      link: "ude.my/UC-b6fe4c60-d6f1-4d95-8c59-49d1af9c9589",
      image: "/placeholder.svg?height=800&width=1200",
    }
    
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(certifications.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentCertifications = certifications.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const openCertificateModal = (cert: Certification) => {
    setSelectedCertificate(cert)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certification" className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Certifications</h2>
        <p className="text-gray-500 mb-8 text-center">This Contains some of my professional certifications and credentials</p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCertifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white/90 p-6 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-1">Issued: {cert.date}</p>
                  <p className="text-sm text-gray-500">Credential ID: {cert.credentialId}</p>
                </div>
                <div className="mt-4">
                  {/* <button
                    onClick={() => openCertificateModal(cert)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    View Certificate
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${currentPage === index ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">{selectedCertificate.title}</h3>
                <button onClick={closeCertificateModal} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <div className="p-6">
                <img
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="w-full h-auto mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Issuer:</p>
                    <p className="text-gray-600">{selectedCertificate.issuer}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Issue Date:</p>
                    <p className="text-gray-600">{selectedCertificate.date}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Credential ID:</p>
                    <p className="text-gray-600">{selectedCertificate.credentialId}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Verification Link:</p>
                    <a
                      href={selectedCertificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certification

