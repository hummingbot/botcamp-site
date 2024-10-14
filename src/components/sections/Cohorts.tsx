import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function Cohorts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Premium 6-Week Cohorts
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Take your trading to the next level with our intensive, personalized cohort programs.
            </p>
          </div>
          <Card className="w-full max-w-3xl bg-gray-800 border-gray-700">
            <CardHeader>
              <Calendar className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-white">Exclusive Bootcamp Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Small group sizes for personalized attention</li>
                <li>Live sessions with expert traders and market makers</li>
                <li>Hands-on projects using real market data</li>
                <li>Networking opportunities with industry professionals</li>
                <li>Certificate of completion and ongoing community access</li>
              </ul>
              <Button className="mt-6" variant="default" size="lg">
                Apply for Next Cohort
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

