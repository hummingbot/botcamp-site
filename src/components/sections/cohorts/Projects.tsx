import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"
import cohort4 from "@/images/thumbs/cohort-4.jpg"
import cohort5ai from "@/images/thumbs/cohort5-ai.webp"
import cohort5statarb from "@/images/thumbs/cohort5-sa.webp"
import cohort7 from "@/images/thumbs/cohort-7.webp"
import cohort9 from "@/images/thumbs/cohort-9.jpg"
import cohort10 from "@/images/thumbs/cohort-10.jpg"

export default function CohortProjects() {
  const demodays = [
    {
      title: "Cohort 10 Demo Day",
      date: "November 2024",
      description: "Latest graduates showcasing innovative trading strategies",
      videoUrl: "https://youtu.be/FVtaqrpzhU4",
      thumbnail: cohort10
    },
    {
      title: "Cohort 9 Demo Day",
      date: "August 2024",
      description: "Solana DEX auto-rebalancing, PCA, and CEX-DEX arbitrage strategies",
      videoUrl: "https://www.youtube.com/watch?v=b2BL-gCqKYI",
      thumbnail: cohort9
    },
    {
      title: "Cohort 7 Demo Day",
      date: "July 2024",
      description: "Advanced market making and arbitrage trading strategies",
      videoUrl: "https://www.youtube.com/watch?v=TAulqoSenmk",
      thumbnail: cohort7
    },
    {
      title: "Cohort 5 - AI Strategy",
      date: "July 2023",
      description: "Directional trading strategy with AI Helper",
      videoUrl: "https://www.youtube.com/watch?v=kjavBd9vvWA",
      thumbnail: cohort5ai
    },
    {
      title: "Cohort 5 - Statistical Arbitrage",
      date: "July 2023",
      description: "Automated trading strategies across multiple markets",
      videoUrl: "https://www.youtube.com/watch?v=DyHA8KPheMw",
      thumbnail: cohort5statarb
    },
    {
      title: "Cohort 4 Demo Day",
      date: "April 2023",
      description: "Automated trading strategies across multiple markets",
      videoUrl: "https://www.youtube.com/watch?v=mjeTm9MQz9c",
      thumbnail: cohort4
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-diagonal-stripes">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-secondary">
            Build Any Strategy You Can Imagine
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl">
            76 certified Hummingbot developers and market makers across 10 cohorts have completed our rigorous training program and showcased their custom trading strategies at Demo Day.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {demodays.map((demo, index) => (
              <a
                href={demo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Card className="bg-gray-900 border-gray-800 group relative overflow-hidden transition-all duration-300 hover:border-secondary">
                  <div className="aspect-video relative">
                    <Image
                      src={demo.thumbnail}
                      alt={demo.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{demo.title}</h3>
                    <p className="text-primary mb-2">{demo.date}</p>
                    <p className="text-gray-400 text-sm">{demo.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://hummingbot.org/certification/list/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary underline transition-colors"
            >
              View the complete list of certified developers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
