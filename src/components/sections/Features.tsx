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
      description: "Learn to design, code, and deploy custom strategies on both CEX and DEX."
    },
    {
      icon: Zap,
      title: "Professional Instruction",
      description: "Online live sessions and office hours taught by the core maintainers of Hummingbot."
    },
    {
      icon: Users,
      title: "Join a Global Trader Community",
      description: "Connect with thousands of other algo traders and market makers in private Discord channels."
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Why Choose Botcamp?</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
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
    </section>
  )
}
