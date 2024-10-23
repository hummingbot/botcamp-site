import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Dominate the Markets?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Join the ranks of elite traders who are reshaping the landscape of algorithmic trading with Botcamp.
            </p>
          </div>
          <div className="space-x-4 mt-6">
            <Button variant="default" size="lg">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg" className="text-black bg-white hover:bg-gray-100 hover:text-black">
              Join a Cohort
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
