import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import cohortImage from "@/images/live-session.webp"

export default function Cohorts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(circle_at_center,rgba(95,215,255,0.2)_0%,rgb(0,0,0)_100%)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Premium 6-Week Cohorts
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Get personalized coaching and earn your Hummingbot certification with our intensive, small-batch cohorts.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <Image
              src={cohortImage}
              alt="Cohort program"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 bg-black border border-gray-700 rounded-lg p-6">
            <div className="mb-4 flex flex-row items-center space-x-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-white">The Full Botcamp Experience</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Live online sessions with expert instructors and mentors</li>
              <li>Earn your Hummingbot certification by completing a hands-on project</li>
              <li>Private networking opportunities and ongoing community access</li>
              <li>Includes access to 3 Botcamp introductory courses</li>
            </ul>
            <Button variant="default" size="lg" asChild>
              <a href="/cohorts">
                See Cohort Details
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
