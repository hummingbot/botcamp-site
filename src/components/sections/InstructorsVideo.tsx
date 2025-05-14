import Image from 'next/image'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Play } from "lucide-react"
import mikeImage from "@/images/mike.webp"
import fedeImage from "@/images/fede.webp"
import React from 'react'
import { Button } from '@/components/ui/button'

export default function InstructorsVideo() {
  const instructors = [
    {
      name: "Michael Feng",
      role: "Hummingbot Co-founder",
      bio: "Michael co-founded CoinAlpha, the company behind Hummingbot, and wrote the Hummingbot whitepaper in 2019. Previously, he spent 7 years in credit derivatives at JPMorgan and Citigroup.",
      image: mikeImage,
      social: {
        linkedin: "https://www.linkedin.com/in/fengtality/",
        twitter: "https://x.com/fengtality",
      }
    },
    {
      name: "Federico Cardoso",
      role: "Hummingbot CTO",
      bio: "Federico is the CTO of Hummingbot Foundation. In addition, he teaches Machine Learning and Big Data at the University of Buenos Aires. Previously, he was a quant trader at CTF Capital.",
      image: fedeImage,
      social: {
        linkedin: "https://www.linkedin.com/in/federico-cardoso-977ba13a/",
        twitter: "https://x.com/cardosofede",
      }
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-black/90 to-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 text-white">
            Meet Your Instructors
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mb-12 text-lg">
            Learn directly from the creators of Hummingbot - the leading open source framework for crypto market making and algorithmic trading.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl mb-16">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-gray-800/30 backdrop-blur-sm border-gray-800/70 hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={instructor.image as any}
                      alt={instructor.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                    <p className="text-primary">{instructor.role}</p>
                    <div className="flex space-x-3 mt-2">
                      {instructor.social.linkedin && (
                        <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 text-gray-400 hover:text-white" />
                        </a>
                      )}
                      {instructor.social.twitter && (
                        <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-4 w-4 text-gray-400 hover:text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{instructor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Video Section */}
          <div className="mt-8 w-full max-w-3xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Hear from Our Instructors</h3>
              <p className="text-gray-300">
                Michael and Federico explain why they created Botcamp and what you'll learn in our cohort program.
              </p>
            </div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gray-700 shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/jsD6Sz-trQc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="mt-6 flex justify-center">
              <Button variant="default" size="lg" className="rounded-full px-8">
                <Play className="h-4 w-4 mr-2" />
                Learn More About Botcamp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}