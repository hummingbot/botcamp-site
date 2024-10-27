import Image from 'next/image'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function CohortInstructors() {
  const instructors = [
    {
      name: "Michael Feng",
      role: "Lead Instructor",
      bio: "Co-founder of Hummingbot, former hedge fund trader with 15+ years of algorithmic trading experience",
      image: "/instructors/michael.jpg",
      social: {
        linkedin: "https://linkedin.com/in/michaelfeng",
        twitter: "https://twitter.com/michaelfeng",
      }
    },
    {
      name: "Martin Kou",
      role: "Technical Instructor",
      bio: "Core developer of Hummingbot, specializing in high-frequency trading systems and market making algorithms",
      image: "/instructors/martin.jpg",
      social: {
        github: "https://github.com/martinkou",
        linkedin: "https://linkedin.com/in/martinkou",
      }
    },
    {
      name: "Carlo Las Marias",
      role: "Strategy Mentor",
      bio: "Experienced quant trader and educator, focused on DeFi market making strategies",
      image: "/instructors/carlo.jpg",
      social: {
        twitter: "https://twitter.com/carlolasmarias",
        linkedin: "https://linkedin.com/in/carlolasmarias",
      }
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Learn from Industry Experts
          </h2>
          <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-primary">{instructor.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center mb-4">{instructor.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {instructor.social.github && (
                      <a href={instructor.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 text-gray-400 hover:text-white" />
                      </a>
                    )}
                    {instructor.social.linkedin && (
                      <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                      </a>
                    )}
                    {instructor.social.twitter && (
                      <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}