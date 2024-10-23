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
      title: "Master Market Making",
      description: "Learn market making, from the business to the code, and how to profit from it."
    },
    {
      icon: Zap,
      title: "Professional Instruction",
      description: "Taught by maintainers of Hummingbot, the leading open source crypto bot framework."
    },
    {
      icon: Users,
      title: "Join a Global Trader Community",
      description: "Connect and team up with other Botcamp students in private Discord channels."
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Why Choose Botcamp?</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <feature.icon className={`h-8 w-8 mb-2 ${getIconColor(index)}`} />
                  <CardTitle className="text-white">{feature.title}</CardTitle>
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
