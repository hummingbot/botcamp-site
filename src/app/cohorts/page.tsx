'use client'

import { CohortHero } from "@/components/sections/cohorts/CohortHero"
import CohortMetrics from "@/components/sections/cohorts/CohortMetrics"
import CohortFeatures from "@/components/sections/cohorts/CohortFeatures"
import CohortSchedule from "@/components/sections/cohorts/Schedule"
import CohortInstructors from "@/components/sections/cohorts/Instructors"
import CohortProjects from "@/components/sections/cohorts/Projects"
import CohortFAQ from "@/components/sections/cohorts/CohortFAQ"
import HummingbotMetrics from "@/components/sections/cohorts/HummingbotMetrics"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const COHORT_LINK = "https://www.botcamp.xyz/event/botcamp-cohort-10-9/register";
const COHORT_HELIO_LINK = "https://app.hel.io/pay/66ba435d1011b504426d1d0c";
const COHORT_START_DATE = new Date('2024-11-05');

export default function CohortsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <CohortHero cohortLink={COHORT_LINK} helioLink={COHORT_HELIO_LINK} />
        <CohortMetrics />
        <CohortFeatures />
        <CohortSchedule 
          cohortLink={COHORT_LINK} 
          helioLink={COHORT_HELIO_LINK} 
          startDate={COHORT_START_DATE} 
        />
        <HummingbotMetrics />
        <CohortInstructors />
        <CohortProjects />
        <CohortFAQ />
        
        {/* New CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
          <div className="absolute inset-0 bg-grid-pattern"></div>
          <div className="container flex flex-col items-center justify-center gap-8 text-center relative z-10">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Learn Professional Market Making?
              </h2>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button variant="default" size="lg" asChild className="mt-4">
                <a href={COHORT_LINK} target="_blank" rel="noopener noreferrer">
                  Join Botcamp Cohort 10
                </a>
              </Button>
              <a 
                href={COHORT_HELIO_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Pay in USDC
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
