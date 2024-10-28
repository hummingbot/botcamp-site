import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative border-t border-gray-800">
      {/* Add grid background */}
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Start Your Algorithmic Trading Journey?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Join the ranks of elite traders who are reshaping the landscape of algorithmic trading with Botcamp.
            </p>
          </div>
          <div className="space-x-4 mt-6">
            <Button variant="default" size="lg" asChild>
              <Link href="https://www.botcamp.xyz/slides/all">
                Explore Courses
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/cohorts">
                Join a Cohort
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
