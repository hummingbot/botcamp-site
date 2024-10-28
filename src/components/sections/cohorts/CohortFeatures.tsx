import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Users, Video, Trophy, Award } from "lucide-react"
import Image from "next/image"
import cohortImage from "@/images/live-session.webp"

const getIconColor = (index: number) => {
  switch (index % 3) {
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
      title: "Two Tracks",
      description: "Join either the Market Maker track or the Developer track to focus on your learning goals, or both!"
    },
    {
      icon: Users,
      title: "Office Hours",
      description: "Get 1-on-1 help from instructors to design, live code, and troubleshoot your strategy"
    },
    {
      icon: Trophy,
      title: "Demo Day",
      description: "Present your custom algorithmic trading strategy in the final session and win prizes"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn your official NFT that certifies you as a Hummingbot market maker or developer"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative border-t border-gray-800">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Cohort Features
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl">
            Designed to transform you into a professional market maker in 6 weeks
          </p>
          <div className="relative w-full max-w-3xl h-[300px] mb-12">
            <Image
              src={cohortImage}
              alt="Cohort Program Overview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
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
