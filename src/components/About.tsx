import type React from "react"

const About: React.FC = () => {
  const photoGrid = [
    {
      src: "https://raw.githubusercontent.com/vishalkumarojha/Portfolio--VishalOjha/refs/heads/main/img/InFrame_1729593012817.jpg",
      alt: "Vishal at a hackathon",
      className: "col-span-2 row-span-2",
    },
    {
      src: "https://github.com/vishalkumarojha/Portfolio--VishalOjha/blob/main/img/WhatsApp%20Image%202025-03-23%20at%2013.26.17.jpeg?raw=true",
      alt: "Team collaboration",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://raw.githubusercontent.com/vishalkumarojha/Portfolio--VishalOjha/refs/heads/main/img/InFrame_1729593044138.jpg",
      alt: "Working on laptop",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://github.com/vishalkumarojha/Portfolio--VishalOjha/blob/main/img/WhatsApp%20Image%202025-03-23%20at%2011.09.17.jpeg?raw=true",
      alt: "At a tech conference",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://github.com/vishalkumarojha/Portfolio--VishalOjha/blob/main/img/WhatsApp%20Image%202025-03-23%20at%2013.30.01.jpeg?raw=true",
      alt: "Coding session",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://github.com/vishalkumarojha/Portfolio--VishalOjha/blob/main/img/WhatsApp%20Image%202025-03-23%20at%2011.03.18.jpeg?raw=true",
      alt: "Team meeting",
      className: "col-span-2 row-span-1",
    },
    {
      src: "https://github.com/vishalkumarojha/Portfolio--VishalOjha/blob/main/img/WhatsApp%20Image%202025-03-23%20at%2011.03.51.jpeg?raw=true",
      alt: "Team meeting",
      className: "col-span-2 row-span-1",
    },
  ]

  return (
    <section id="about" className="relative py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a 2nd-year student at VIT University, Bhopal, passionate about building impactful tech solutions. As
              the Founder of ArnoCodes, builder of HackCrusade, and CTO of ScrambleLabs, I specialize in full-stack
              development (MERN), UI/UX design, and frameworks like React, Django & Flask. With 55K+ LinkedIn
              impressions, I also have experience in content writing and video editing, helping me communicate technical
              ideas effectively.
            </p>
            <p className="text-gray-600 mb-4">
              Beyond development, I actively contribute to tech communities. I serve as DCA & the EX-Tech Team Lead at
              Notion Community VIT Bhopal and Co-Lead of the technical team at E-Cell VIT Bhopal, previously leading
              teams in creative, event management, and operations. I also played a key role as Lead Coordinator for the
              Health Hack hackathon, organized by VIT Bhopal University and Johns Hopkins University.
            </p>
            <p className="text-gray-600 mb-6">
              I am always eager to learn, grow, and collaborate on exciting projects. From developing the Advity website
              to working on innovative initiatives, I thrive on pushing boundaries and exploring new opportunities.
              Whether it's building scalable applications, managing tech communities, or organizing impactful events,
              I'm always ready to take on new challenges. Let's connect and create something remarkable together!
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-8">
              <div>
                <span className="block text-4xl font-bold">4+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">50+</span>
                <span className="text-sm text-gray-500">Projects Completed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">20+</span>
                <span className="text-sm text-gray-500">Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 h-full">
            {photoGrid.map((photo, index) => (
              <div key={index} className={`overflow-hidden rounded-lg shadow-lg ${photo.className}`}>
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

