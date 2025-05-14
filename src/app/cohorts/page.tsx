'use client'

import React from 'react'
import CohortFeatures from "@/components/sections/cohorts/CohortFeatures"
import Cohort12Schedule from "@/components/sections/cohorts/Cohort12Schedule"
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
import { ArrowRight, Calendar, ChevronDown, Users, Award } from "lucide-react"

const COHORT_LINK = "https://courses.botcamp.xyz/event/botcamp-cohort-12-12/register";
const COHORT_HELIO_LINK = "https://t.me/botcampcohorts";
const COHORT_START_DATE = new Date('2025-09-09');
const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";
const CURRENT_COHORT = 12;

// Botcamp metrics
const TOTAL_COHORTS = 11;
const TOTAL_ALUMNI = 342;
const TOTAL_CERTIFIED = 91;

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  description: string;
}

// Component for displaying key metrics
function MetricCard({ icon, value, label, description }: MetricCardProps) {
  return (
    <div className="bg-card/30 backdrop-blur-sm border border-border/60 rounded-xl p-6 flex flex-col items-center justify-center text-center transform transition-all hover:scale-105 hover:bg-card/40">
      <div className="mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-primary mb-1">{value}+</div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

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
                                                                     hover:border-white/60 hover:text-primary">
                  <Link href={COHORT_HELIO_LINK} target="_blank">
                    Chat in Telegram
                  </Link>
                </Button>
              </div>
              
              {/* Added descriptive text for Telegram option */}
              <p className="text-sm text-gray-400 mt-2 max-w-md text-center">
                Ask us anything about Botcamp in Telegram, like payment methods, team discounts, etc.
              </p>
              
              <div className="flex flex-col items-center gap-2 mt-8">
                {/* Scroll button with subtle animation */}
                <button
                  onClick={scrollToSchedule}
                  className="flex flex-col items-center text-white hover:text-primary transition-colors"
                >
                  <span className="mb-1 drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">View Schedule</span>
                  <ChevronDown className="h-5 w-5 animate-bounce" />
                </button>

                {/* Link to past cohorts */}
                <Link
                  href="/cohorts/cohort11"
                  className="text-sm text-gray-400 hover:text-primary flex items-center gap-1 transition-colors mt-2"
                >
                  <span>View past cohort (11)</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CohortFeatures />
        
        <div id="schedule">
          <Cohort12Schedule
            cohortLink={COHORT_LINK}
            helioLink={COHORT_HELIO_LINK}
            startDate={COHORT_START_DATE}
          />
        </div>

        <HummingbotMetrics />

        {/* Info Session Video Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background/90 to-background/70 relative">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary-foreground mb-6">
                Info Session
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Watch Our Cohort Info Session</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
                Learn about the Botcamp Cohort program, curriculum, and what you'll gain from this intensive 4-week market making bootcamp.
              </p>
            </div>

            <div className="relative mx-auto overflow-hidden rounded-xl border border-primary/20 shadow-xl bg-black/50">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/kIIzCkt4-xQ"
                  className="w-full h-full"
                  title="Botcamp Cohort Info Session"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Still have questions? Join our Telegram group or contact us directly for more information.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href={COHORT_HELIO_LINK} target="_blank">
                  Chat with Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cohort Metrics Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Botcamp by the Numbers</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Join our growing community of algorithmic traders and market makers from around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <MetricCard
                icon={<Calendar className="h-8 w-8 text-primary" />}
                value={TOTAL_COHORTS}
                label="Cohorts Completed"
                description="Botcamp cohorts conducted since 2022"
              />

              <MetricCard
                icon={<Users className="h-8 w-8 text-primary" />}
                value={TOTAL_ALUMNI}
                label="Alumni"
                description="Professionals trained in algorithmic trading"
              />

              <MetricCard
                icon={<Award className="h-8 w-8 text-primary" />}
                value={TOTAL_CERTIFIED}
                label="Certified Developers"
                description="Official Hummingbot certified traders"
              />
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold mb-6">Past Cohorts</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/cohorts/cohort11" className="flex items-center gap-2">
                    <span>View Cohort 11</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CohortInstructors />
        
        {/* Projects section */}
        <CohortProjects />
        
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
