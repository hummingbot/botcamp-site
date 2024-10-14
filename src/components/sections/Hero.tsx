import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Learn the Dark Arts of Market Making
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Master algo trading and market making with Botcamp, using the powerful open-source Hummingbot framework.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="default">Explore Courses</Button>
            <Button variant="outline" className="text-black bg-white hover:bg-gray-100 hover:text-black">Join a Cohort</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
