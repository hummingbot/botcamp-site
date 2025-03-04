import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Video, Code, Headphones, Award } from "lucide-react"
import Image from "next/image"
import cohortImage from "@/images/live-session.webp"

const getIconColor = (index: number) => {
  switch (index % 4) {
    case 0:
      return "text-primary";
    case 1:
      return "text-secondary";
    case 2:
      return "text-accent";
    case 3:
      return "text-destructive";
    default:
      return "text-primary";
  }
};

export default function CohortFeatures() {
  const features = [
    {
      icon: Video,
      title: "12+ LIVE SESSIONS",
      description: "Dive deep into market theory, technical implementation, and deployment strategies with expert instructors"
    },
    {
      icon: Code,
      title: "BUILD YOUR ALGO",
      description: "Design, build, and deploy your own custom algorithmic trading strategy from concept to live execution"
    },
    {
      icon: Headphones,
      title: "HANDS-ON COACHING",
      description: "Get personalized help during office hours to troubleshoot your code and optimize your trading strategies"
    },
    {
      icon: Award,
      title: "GET CERTIFIED",
      description: "Present your strategy on Demo Day and earn official recognition as a certified Hummingbot market maker"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative border-t border-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-6 text-white">
            <span className="text-secondary">ACCELERATE</span> YOUR TRADING CAREER
          </h2>
          <p className="text-xl text-gray-300 text-center mb-10 max-w-2xl font-medium">
            From zero to professional market maker in just 4 intense weeks
          </p>
          <div className="relative w-full max-w-3xl h-[300px] mb-12 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
            <Image
              src={cohortImage}
              alt="Cohort Program Overview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="w-full max-w-4xl mb-16">
            <p className="text-gray-300 text-center mb-4 max-w-2xl mx-auto">
              Your cohort enrollment includes all four premium <a href="https://courses.botcamp.xyz/slides/all" className="text-primary">Botcamp courses</a> — an $800 value with over 20 hours of expert instruction from basic to advanced trading concepts
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
              <div className="bg-gray-900 p-3 rounded-md border border-gray-800">
                <p className="text-primary font-bold">Intro to Algorithmic Trading</p>
                <p className="text-white text-xs">Basic</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-md border border-gray-800">
                <p className="text-secondary font-bold">Market Making Strategies</p>
                <p className="text-white text-xs">Intermediate</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-md border border-gray-800">
                <p className="text-destructive font-bold">Directional Strategies & V2 Framework</p>
                <p className="text-white text-xs">Intermediate</p>
              </div>
              <div className="bg-gray-900 p-3 rounded-md border border-gray-800">
                <p className="text-accent font-bold">Cross Exchange Market Making</p>
                <p className="text-white text-xs">Advanced</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-secondary transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className={`p-2 rounded-full bg-gray-800`}>
                    <feature.icon className={`h-6 w-6 ${getIconColor(index)}`} />
                  </div>
                  <CardTitle className="text-white text-lg font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
