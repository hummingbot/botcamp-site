'use client'

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import Courses from "@/components/sections/Courses"
import Cohorts from "@/components/sections/Cohorts"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"

export default function BotcampLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Courses />
        <Cohorts />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

