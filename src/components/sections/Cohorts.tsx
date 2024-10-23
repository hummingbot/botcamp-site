import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function Cohorts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Premium 6-Week Cohorts
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Take your trading to the next level with our intensive, personalized cohort programs.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <Image
              src="/live-session.webp"
              alt="Cohort program"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="mb-4">
              <Calendar className="h-8 w-8 mb-2 text-primary" />
              <h3 className="text-2xl font-bold text-white mb-2">Exclusive Bootcamp Experience</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Small group sizes for personalized attention</li>
              <li>Live sessions with expert traders and market makers</li>
              <li>Hands-on projects using real market data</li>
              <li>Networking opportunities with industry professionals</li>
              <li>Certificate of completion and ongoing community access</li>
            </ul>
            <Button variant="default" size="lg">
              Apply for Next Cohort
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
