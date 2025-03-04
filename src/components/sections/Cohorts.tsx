import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Code, BookOpen, Users } from "lucide-react"
import cohortImage from "@/images/live-session.webp"
import Link from "next/link"
import CandlesBackground from "@/components/ui/candles-background"

export default function Cohorts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(circle_at_center,rgba(95,215,255,0.2)_0%,rgb(0,0,0)_100%)] relative">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="cohorts-grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cohorts-grid)" />
        </svg>
      </div>

      {/* Candles background */}
      <CandlesBackground />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Launching April 2025
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Botcamp Cohort 11
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Our intensive 4-week market making bootcamp returns with personalized coaching from Hummingbot core maintainers.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <Image
              src={cohortImage}
              alt="Botcamp Cohort 11"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg px-3 py-2 text-sm">
              Starting April 8, 2025
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-black border border-gray-700 rounded-lg p-6">
            <div className="mb-6 flex flex-col space-y-4">
              <h3 className="text-2xl font-bold text-white">Cohort 11 Highlights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Theory Sessions</h4>
                    <p className="text-sm text-gray-300">Market making fundamentals & business models</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Code className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Hands-on Coding</h4>
                    <p className="text-sm text-gray-300">Build & deploy custom trading strategies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Office Hours</h4>
                    <p className="text-sm text-gray-300">Personalized coaching & mentorship</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Demo Day</h4>
                    <p className="text-sm text-gray-300">Showcase your strategy & earn certification</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Earn your Hummingbot Certification in Market Making Strategy Development while building a custom algorithmic trading strategy under expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/cohorts">
                  Enroll Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/cohorts#schedule">
                  View Full Schedule
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
