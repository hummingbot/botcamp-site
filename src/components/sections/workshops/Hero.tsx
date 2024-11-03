import { Button } from "@/components/ui/button"
import CandlesBackground from "@/components/ui/candles-background"
import { TwitterTimeline } from "@/components/ui/twitter-timeline"

interface WorkshopHeroProps {
  workshopLink: string;
  helioLink: string;
}

export function WorkshopHero({ workshopLink, helioLink }: WorkshopHeroProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <CandlesBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 lg:text-left">
          <div className="flex flex-col items-center lg:items-start space-y-4 w-full lg:w-1/2 order-1 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                Launch Your AI Agent
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-300 md:text-xl">
                A two-week workshop that teaches you how to develop intelligent crypto trading bots like{" "}
                <a 
                  href="https://twitter.com/truth_terminal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  @truth_terminal
                </a>{" "}
              </p>
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg" asChild className="mt-4">
                <a href={workshopLink} target="_blank" rel="noopener noreferrer">
                  Register for Workshop
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

          <div className="w-full lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="relative rounded-lg overflow-hidden h-[500px]">
              <TwitterTimeline 
                username="llamnm"
                height={500}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
