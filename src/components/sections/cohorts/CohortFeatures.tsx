import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Users, Video, Calendar, Award } from "lucide-react"
import Image from "next/image"
import cohortImage from "@/images/live-session.webp"

export default function CohortFeatures() {
  const features = [
    {
      icon: Video,
      title: "Live Sessions",
      description: "Weekly live instruction sessions with industry experts and hands-on workshops"
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Personal guidance from experienced algo traders and developers"
    },
    {
      icon: Calendar,
      title: "Structured Program",
      description: "6-week curriculum with clear milestones and accountability"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn your Hummingbot certification upon project completion"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative border-t border-gray-800">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Program Features
          </h2>
          <p className="text-xl text-gray-300 text-center mb-8 max-w-2xl">
            Join our intensive 6-week cohort program designed to transform you into a professional algo trader.
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
                  <feature.icon className="h-8 w-8 text-primary" />
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
