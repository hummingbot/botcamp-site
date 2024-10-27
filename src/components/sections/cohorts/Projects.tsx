import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function CohortProjects() {
  const projects = [
    {
      title: "Cross-Exchange Market Making",
      student: "Alex from Singapore",
      description: "Arbitrage strategy between Binance and dYdX",
      videoUrl: "https://www.youtube.com/watch?v=4elUhsZdc6w",
      thumbnail: "/projects/alex-project.jpg"
    },
    {
      title: "AMM LP Strategy",
      student: "Toby from Germany",
      description: "Automated liquidity provision on Uniswap v3",
      videoUrl: "https://www.youtube.com/watch?v=QPnOPPoXcrM",
      thumbnail: "/projects/toby-project.jpg"
    },
    // Add 4 more project examples...
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl">
            Check out the innovative trading strategies developed by our graduates
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 group relative overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Play className="h-12 w-12 text-white" />
                  </a>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-primary mb-2">{project.student}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}