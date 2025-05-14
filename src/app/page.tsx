'use client'

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Testimonials from "@/components/sections/Testimonials"
import Courses from "@/components/sections/Courses"
import Cohorts from "@/components/sections/Cohorts"
import InstructorsVideo from "@/components/sections/InstructorsVideo"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"

const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";

export default function BotcampLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <div className="w-full bg-primary/10 border-b border-primary/20 py-2 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <p className="text-sm text-primary font-medium">
              Botcamp Cohort 12 enrollment now open! Starting September 9, 2025
            </p>
            <a href="/cohorts" className="text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-1 px-3 rounded-full transition-colors inline-flex items-center">
              Learn More →
            </a>
          </div>
        </div>
      </div>
      <Header coursesLink={COURSES_LINK} />
      <main className="flex-1 flex flex-col items-center">
        <Hero coursesLink={COURSES_LINK} />
        <Features />
        <Testimonials />
        <Courses coursesLink={COURSES_LINK} />
        <Cohorts />
        <InstructorsVideo />
        <FAQ />
        <CTA coursesLink={COURSES_LINK} />
      </main>
      <Footer coursesLink={COURSES_LINK} />
    </div>
  )
}
