'use client'

import { CohortHero } from "@/components/sections/cohorts/CohortHero"
import CohortFeatures from "@/components/sections/cohorts/CohortFeatures"
import CohortSchedule from "@/components/sections/cohorts/Schedule"
import CohortInstructors from "@/components/sections/cohorts/Instructors"
import CohortProjects from "@/components/sections/cohorts/Projects"
import CohortFAQ from "@/components/sections/cohorts/CohortFAQ"
import HummingbotMetrics from "@/components/sections/cohorts/HummingbotMetrics"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CohortCTA from "@/components/sections/cohorts/CohortCTA"

const COHORT_LINK = "https://courses.botcamp.xyz/event/botcamp-cohort-10-9/register";
const COHORT_HELIO_LINK = "https://app.hel.io/pay/66ba435d1011b504426d1d0c";
const COHORT_START_DATE = new Date('2024-11-05');
const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";
const CURRENT_COHORT = 10;

export default function Cohort10Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header coursesLink={COURSES_LINK} />
      <main className="flex-1 flex flex-col items-center">
        <CohortHero cohortLink={COHORT_LINK} helioLink={COHORT_HELIO_LINK} />
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
        <CohortCTA cohortLink={COHORT_LINK} helioLink={COHORT_HELIO_LINK} />
      </main>
      <Footer coursesLink={COURSES_LINK} />
    </div>
  )
} 