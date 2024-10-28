import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"

export default function CohortProjects() {
  const demodays = [
    {
      title: "Cohort 9 Demo Day",
      date: "March 2024",
      description: "Latest strategies in MEV and cross-chain arbitrage",
      videoUrl: "https://www.youtube.com/watch?v=4elUhsZdc6w",
      thumbnail: "/projects/cohort9-demo.jpg"
    },
    {
      title: "Cohort 7 Demo Day",
      date: "September 2023",
      description: "Innovative approaches to DEX liquidity provision",
      videoUrl: "https://www.youtube.com/watch?v=QPnOPPoXcrM",
      thumbnail: "/projects/cohort7-demo.jpg"
    },
    {
      title: "Cohort 4 Demo Day",
      date: "June 2022",
      description: "Groundbreaking perpetuals and options strategies",
      videoUrl: "https://www.youtube.com/watch?v=mjeTm9MQz9c",
      thumbnail: "/projects/cohort4-demo.jpg"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-diagonal-stripes">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Demo Day Showcase
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl">
            Watch our past Demo Days where students present their trading strategies and research findings
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {demodays.map((demo, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 group relative overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={demo.thumbnail}
                    alt={demo.title}
                    fill
                    className="object-cover"
                  />
                  <a
                    href={demo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Play className="h-12 w-12 text-white" />
                  </a>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{demo.title}</h3>
                  <p className="text-primary mb-2">{demo.date}</p>
                  <p className="text-gray-400 text-sm">{demo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
