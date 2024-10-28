'use client'

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Testimonials from "@/components/sections/Testimonials"
import Courses from "@/components/sections/Courses"
import Cohorts from "@/components/sections/Cohorts"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"

export const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";

export default function BotcampLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <Features />
        <Testimonials />
        <Courses />
        <Cohorts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
