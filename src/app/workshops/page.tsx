'use client'

import { WorkshopHero } from "@/components/sections/workshops/Hero"
import WorkshopFeatures from "@/components/sections/workshops/Features"
import WorkshopSchedule from "@/components/sections/workshops/Schedule"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WorkshopCTA from "@/components/sections/workshops/CTA"

const WORKSHOP_LINK = "https://courses.botcamp.xyz/event/workshop-2024/register";
const WORKSHOP_HELIO_LINK = "https://app.hel.io/pay/workshop-payment-id";
const WORKSHOP_START_DATE = new Date('2024-12-09');
const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";

export default function WorkshopsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header coursesLink={COURSES_LINK} />
      <main className="flex-1 flex flex-col items-center">
        <WorkshopHero workshopLink={WORKSHOP_LINK} helioLink={WORKSHOP_HELIO_LINK} />
        <WorkshopFeatures />
        <WorkshopSchedule 
          workshopLink={WORKSHOP_LINK} 
          helioLink={WORKSHOP_HELIO_LINK} 
          startDate={WORKSHOP_START_DATE} 
        />
        <WorkshopCTA workshopLink={WORKSHOP_LINK} helioLink={WORKSHOP_HELIO_LINK} />
      </main>
      <Footer coursesLink={COURSES_LINK} />
    </div>
  )
}