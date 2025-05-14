import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Video, Users, Code, BookOpen } from "lucide-react"

const getIconColor = (index: number) => {
  switch (index % 3) {
    case 0:
      return "text-primary";
    case 1:
      return "text-secondary";
    case 2:
      return "text-accent";
    default:
      return "text-primary";
  }
};

export default function WorkshopFeatures() {
  const features = [
    {
      icon: Code,
      title: "Llama & OpenAI",
      description: "Learn to leverage open source LLMs like Llama alongside OpenAI for AI-powered trading systems"
    },
    {
      icon: BookOpen,
      title: "LangChain",
      description: "Build sophisticated trading pipelines using LangChain for function calling and autonomous agents"
    },
    {
      icon: Video,
      title: "Solana",
      description: "Learn to interact with Solana's blockchain and DeFi protocols programmatically"
    },
    {
      icon: Users,
      title: "Hummingbot",
      description: "Deploy automated trading strategies across Solana DEXs and 50+ centralized exchanges"
    },
    {
      icon: Code,
      title: "GeckoTerminal",
      description: "Access real-time DeFi market data and analytics through GeckoTerminal's comprehensive API"
    },
    {
      icon: Video,
      title: "Twitter API",
      description: "Create AI agents that can analyze, tweet, and engage with the crypto trading community"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative border-t border-gray-800">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Open Source Tools
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl">
            Master the latest open source technologies for AI-powered trading
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <feature.icon className={`h-8 w-8 ${getIconColor(index)}`} />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}