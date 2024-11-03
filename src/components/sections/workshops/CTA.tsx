import { Button } from "@/components/ui/button"
import { event } from '@/lib/gtag'

interface WorkshopCTAProps {
  workshopLink: string;
  helioLink: string;
}

export default function WorkshopCTA({ workshopLink, helioLink }: WorkshopCTAProps) {
  const handleJoinClick = () => {
    event({
      action: 'click',
      category: 'workshop',
      label: 'join_workshop_cta'
    })
  }

  const handleUSDCClick = () => {
    event({
      action: 'click',
      category: 'payment',
      label: 'usdc_payment_cta'
    })
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-8 text-center relative z-10">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ready to Master Algorithmic Trading?
          </h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button variant="default" size="lg" asChild className="mt-4" onClick={handleJoinClick}>
            <a href={workshopLink} target="_blank" rel="noopener noreferrer">
              Register for Workshop
            </a>
          </Button>
          <a 
            href={helioLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-300"
            onClick={handleUSDCClick}
          >
            Pay in USDC
          </a>
        </div>
      </div>
    </section>
  )
}