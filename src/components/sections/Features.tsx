import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

const getIconColor = (index: number) => {
  switch (index % 3) {
    case 0:
      return "text-primary";
    case 1:
      return "text-accent";
    case 2:
      return "text-destructive";
    default:
      return "text-primary";
  }
};

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Learn Market Making",
      description: "Learn to design, backtest, and operate market making strategies in production."
    },
    {
      icon: Zap,
      title: "Professional Instruction",
      description: "Taught by core maintainers of Hummingbot, the open source crypto trading bot framework."
    },
    {
      icon: Users,
      title: "Join an Exclusive Community",
      description: "Team up with other Botcamp students and do great things together!"
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgba(95,255,215,0.2)_100%)] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">Why Choose Botcamp?</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
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
