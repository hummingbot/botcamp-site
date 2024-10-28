import { Button } from "@/components/ui/button"
import CandlesBackground from "@/components/ui/candles-background"

interface CohortHeroProps {
  cohortLink: string;
  helioLink: string;
}

export function CohortHero({ cohortLink, helioLink }: CohortHeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <CandlesBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        {/* Changed to flex-col by default, row on larger screens */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 lg:text-left">
          {/* Text Content - Full width on mobile, left side on desktop */}
          <div className="flex flex-col items-center lg:items-start space-y-4 w-full lg:w-1/2 order-1 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                Botcamp Cohorts
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-300 md:text-xl">
                Learn market making in an intensive 6-week program with personalized mentorship and peer support
              </p>
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg" asChild className="mt-4">
                <a href={cohortLink} target="_blank" rel="noopener noreferrer">
                  Join Botcamp Cohort 10
                </a>
              </Button>
              <a 
                href={helioLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-500 ml-4"
              >
                Pay in USDC
              </a>
            </div>
          </div>

          {/* Video Section - Full width on mobile, right side on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/gu77lJqa6Aw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
