'use client'

import { CohortHero } from "@/components/sections/cohorts/CohortHero"
import CohortFeatures from "@/components/sections/cohorts/CohortFeatures"
import Cohort11Schedule from "@/components/sections/cohorts/Cohort11Schedule"
import CohortInstructors from "@/components/sections/cohorts/Instructors"
import CohortProjects from "@/components/sections/cohorts/Projects"
import CohortFAQ from "@/components/sections/cohorts/CohortFAQ"
import HummingbotMetrics from "@/components/sections/cohorts/HummingbotMetrics"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CohortCTA from "@/components/sections/cohorts/CohortCTA"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CandlesBackground from "@/components/ui/candles-background"
import { ArrowRight, Calendar, ChevronDown } from "lucide-react"

const COHORT_LINK = "https://courses.botcamp.xyz/event/botcamp-cohort-11-10/register";
const COHORT_HELIO_LINK = "https://t.me/botcampcohorts";
const COHORT_START_DATE = new Date('2025-04-08'); // Updated to April 8, 2025
const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";
const CURRENT_COHORT = 11;

export default function CohortsPage() {
  // Function to smooth scroll to schedule section
  const scrollToSchedule = () => {
    document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header coursesLink={COURSES_LINK} />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          {/* More faded grid background */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg 
              className="w-full h-full" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <pattern id="cohort-page-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" strokeWidth="0.1"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cohort-page-grid)" />
            </svg>
          </div>

          {/* Enhanced candles background */}
          <div className="absolute inset-0 z-10 opacity-90 scale-110 mix-blend-lighten">
            <CandlesBackground />
          </div>
          
          {/* Lighter gradient overlay to let candles show through more */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/30 z-10"></div>
          
          {/* Subtle glow effects to enhance candles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         w-full h-full rounded-full bg-primary/5 blur-3xl z-5"></div>
          
          {/* Top light source */}
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/20 to-transparent z-5"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl relative z-20">
            <div className="flex flex-col items-center space-y-4 text-center mx-auto">
              {/* Badge */}
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg">
                Now Enrolling
              </div>
              
              {/* Title with enhanced text shadow for better visibility over candles */}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white 
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Botcamp Cohort {CURRENT_COHORT}
              </h1>
              
              {/* Description with more transparent background for better candle visibility */}
              <p className="mx-auto max-w-[700px] text-lg text-white md:text-xl bg-background/10 
                          backdrop-blur-sm px-4 py-2 rounded-lg drop-shadow-md">
                Join our next online bootcamp starting {COHORT_START_DATE.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} and learn to build, deploy, and profit from crypto market making strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:items-center justify-center mt-2">
                {/* Primary button with glow to match candles aesthetic */}
                <Button asChild size="lg" className="text-lg bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <Link href={COHORT_LINK} target="_blank">
                    Enroll Now
                  </Link>
                </Button>
                
                {/* More transparent outline button to let candles show through */}
                <Button asChild size="lg" variant="outline" className="text-lg border-white/40 
                                                                     bg-background/20 backdrop-blur-sm 
                                                                     text-white hover:bg-background/30
                                                                     hover:border-white/60">
                  <Link href={COHORT_HELIO_LINK} target="_blank">
                    Chat in Telegram
                  </Link>
                </Button>
              </div>
              
              {/* Added descriptive text for Telegram option */}
              <p className="text-sm text-gray-400 mt-2 max-w-md text-center">
                Ask us anything about Botcamp in Telegram, like payment methods, team discounts, etc.
              </p>
              
              {/* Scroll button with subtle animation */}
              <button 
                onClick={scrollToSchedule}
                className="mt-8 flex flex-col items-center text-white hover:text-primary transition-colors"
              >
                <span className="mb-1 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">View Schedule</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        <CohortFeatures />
        
        <div id="schedule">
          <Cohort11Schedule 
            cohortLink={COHORT_LINK} 
            helioLink={COHORT_HELIO_LINK} 
            startDate={COHORT_START_DATE} 
          />
        </div>

        <HummingbotMetrics />
        
        <CohortInstructors />
        
        {/* Updated CohortProjects with history enabled */}
        <CohortProjects showCohortHistory={true} currentCohortNum={CURRENT_COHORT} />
        
        <CohortFAQ />
        
        <CohortCTA 
          cohortLink={COHORT_LINK} 
          helioLink={COHORT_HELIO_LINK} 
        />
      </main>
      <Footer coursesLink={COURSES_LINK} />
    </div>
  )
}
