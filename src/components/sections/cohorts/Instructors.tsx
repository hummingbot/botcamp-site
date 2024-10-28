import Image from 'next/image'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Users } from "lucide-react"
import mikeImage from "@/images/mike.webp"
import fedeImage from "@/images/fede.webp"
import React from 'react'

export default function CohortInstructors() {
  const instructors = [
    {
      name: "Michael Feng",
      role: "Hummingbot Co-founder",
      bio: "Michael co-founded CoinAlpha, the company behind Hummingbot, and wrote the Hummingbot whitepaper in 2019. Previously, he spent 7 years in credit derivatives at JPMorgan and Citigroup, where he structured some of the CDOs featured in The Big Short. Michael lives in California, USA.",
      image: mikeImage,
      social: {
        linkedin: "https://www.linkedin.com/in/fengtality/",
        twitter: "https://x.com/fengtality",
      }
    },
    {
      name: "Federico Cardoso",
      role: "Hummingbot CTO",
      bio: "Federico is the CTO of Hummingbot Foundation. In addition, he teaches Machine Learning and Big Data at the University of Buenos Aires. Previously, he was a quant trader at CTF Capital, a hedge fund that specialized in high-frequency market making. Federico lives in Mar del Plata, Argentina.",
      image: fedeImage,
      social: {
        linkedin: "https://www.linkedin.com/in/federico-cardoso-977ba13a/",
        twitter: "https://x.com/cardosofede",
      }
    },
    {
      name: "Botcamp Mentors",
      role: "Hummingbot Community",
      bio: "Attend office hours hosted by experienced algorithmic traders and developers who have built successful trading strategies using Hummingbot.",
      image: (
        <div className="bg-gray-800 rounded-full p-6">
          <Users className="w-full h-full text-gray-300" strokeWidth={1.5} />
        </div>
      ),
      social: {
      }
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
            Learn from Hummingbot Core Maintainers
          </h2>
          <div className="grid gap-8 md:grid-cols-3 w-full max-w-5xl">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    {React.isValidElement(instructor.image) ? (
                      instructor.image
                    ) : (
                      <Image
                        src={instructor.image as any}
                        alt={instructor.name}
                        layout="fill"
                        className="rounded-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-primary">{instructor.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center mb-4">{instructor.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {(instructor.social as any).github && (
                      <a href={(instructor.social as any).github} target="_blank" rel="noopener noreferrer">
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
