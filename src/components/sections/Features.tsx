import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Master Algo Trading",
      description: "Learn to create, test, and deploy sophisticated trading algorithms using Hummingbot."
    },
    {
      icon: Users,
      title: "Join the Dark Side",
      description: "Connect with fellow traders and market makers in our exclusive community."
    },
    {
      icon: Zap,
      title: "Real-World Application",
      description: "Apply your skills immediately with live trading exercises and real market data."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Why Choose Botcamp?</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

