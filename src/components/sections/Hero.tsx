import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="orderbook" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="1" fill="#4CAF50" opacity="0.5" />
              <rect x="0" y="20" width="80" height="1" fill="#4CAF50" opacity="0.5" />
              <rect x="0" y="40" width="60" height="1" fill="#4CAF50" opacity="0.5" />
              <rect x="0" y="60" width="40" height="1" fill="#F44336" opacity="0.5" />
              <rect x="0" y="80" width="20" height="1" fill="#F44336" opacity="0.5" />
            </pattern>
            <pattern id="candlesticks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Green candle */}
              <line x1="10" y1="10" x2="10" y2="90" stroke="#4CAF50" strokeWidth="1" />
              <rect x="8" y="30" width="4" height="40" fill="#4CAF50" />
              {/* Red candle */}
              <line x1="30" y1="20" x2="30" y2="80" stroke="#F44336" strokeWidth="1" />
              <rect x="28" y="20" width="4" height="30" fill="#F44336" />
              {/* Green candle */}
              <line x1="50" y1="15" x2="50" y2="85" stroke="#4CAF50" strokeWidth="1" />
              <rect x="48" y="45" width="4" height="25" fill="#4CAF50" />
              {/* Red candle */}
              <line x1="70" y1="25" x2="70" y2="75" stroke="#F44336" strokeWidth="1" />
              <rect x="68" y="25" width="4" height="20" fill="#F44336" />
              {/* Green candle */}
              <line x1="90" y1="5" x2="90" y2="95" stroke="#4CAF50" strokeWidth="1" />
              <rect x="88" y="50" width="4" height="35" fill="#4CAF50" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#orderbook)" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#candlesticks)" />
          {/* Single price line */}
          <path d="M0 80 Q25 70, 50 60 T100 20" fill="none" stroke="#FFA500" strokeWidth="2" />
        </svg>
      </div>

      {/* Existing content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Learn the Dark Arts of Market Making
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Master algo trading and market making with Botcamp, using the powerful open-source Hummingbot framework.
            </p>
          </div>
          
          {/* Updated YouTube Video Component */}
          <div className="mt-12 w-full max-w-3xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/jsD6Sz-trQc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-x-4 space-y-4">
            <Button variant="default" size="lg">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg">
              Join a Cohort
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
