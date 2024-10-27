'use client'

import CohortHero from "@/components/sections/cohorts/CohortHero"
// import CohortDescription from "@/components/sections/cohorts/CohortDescription"
import CohortMetrics from "@/components/sections/cohorts/CohortMetrics"
import CohortFeatures from "@/components/sections/cohorts/CohortFeatures"
import CohortSchedule from "@/components/sections/cohorts/Schedule"
import CohortInstructors from "@/components/sections/cohorts/Instructors"
import CohortProjects from "@/components/sections/cohorts/Projects"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CTA from "@/components/sections/CTA"
import CohortFAQ from "@/components/sections/cohorts/CohortFAQ"

export default function CohortsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <CohortHero />
        {/* <CohortDescription /> */}
        <CohortMetrics />
        <CohortFeatures />
        <CohortSchedule />
        <CohortInstructors />
        <CohortProjects />
        <CohortFAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
