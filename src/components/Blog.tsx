import type React from "react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  link: string
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Map Interface in TypeScript - The Complete Guide (Published on Arnocodes)",
      excerpt:
        "eeded to store data in key-value pairs? That’s where the Map object in TypeScript",
      date: "Feb. 15, 2025",
      category: "Development",
      image: "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/Screenshot%202025-03-23%20144604.png?raw=true",
      link: "https://www.arnocodes.in/blog",
    },
    {
      id: 2,
      title: "Arrays in Java - The Complete Guide (Published on Arnocodes)",
      excerpt: "tore multiple values of the same type in a single variable? That's where arrays come in! In Java, an array lets you store and manage a collection of elements efficiently.",
      date: "February 14, 2025",
      category: "Java programming",
      image: "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/Screenshot%202025-03-23%20144604.png?raw=true",
      link: "https://www.arnocodes.in/blog",
    },
    {
      id: 3,
      title: " Binary Search in TypeScript - The Complete Guide (Published on Arnocodes)",
      excerpt: "Searching for an element in a collection can sometimes feel like finding a needle in a haystack, but not with Binary Search!",
      date: "Feb. 12, 2025",
      category: "TypeScript Programming",
      image: "https://github.com/vishalkumarojha/testimonials-section/blob/main/css/Screenshot%202025-03-23%20144604.png?raw=true",
      link: "https://www.arnocodes.in/blog",
    },
  ]

  return (
    <section id="blog" className="py-16 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Blog</h2>
        <p className="text-gray-500 mb-8 text-center">Thoughts, insights, and tutorials on development & Programming</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/90 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3 leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <a href={post.link} className="inline-flex items-center text-sm font-medium hover:underline">
                  Read More
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="https://vishalojha628.hashnode.dev/" className="btn btn-secondary">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog

