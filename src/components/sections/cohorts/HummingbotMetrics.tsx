import { Github } from "lucide-react"

export default function HummingbotMetrics() {
    const metrics = [
      {
        value: "$34 billion",
        description: "Last 12M Reported Trade Volume"
      },
      {
        value: "50+",
        description: "Official CEX and DEX Connectors"
      },
      {
        value: "15K+",
        description: "Active Discord Members"
      }
    ]
  
    return (
      <section className="w-full py-12 md:py-24 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center text-white mb-4">
            Powered by Hummingbot
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Hummingbot is an open source Python framework that helps you run automated trading strategies on any CEX and DEX
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-gray-400">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="https://github.com/hummingbot/hummingbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" /> Github
            </a>
          </div>
        </div>
      </section>
    )
  }
