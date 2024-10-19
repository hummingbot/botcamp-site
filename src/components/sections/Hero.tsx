import React from 'react';
import { Button } from "@/components/ui/button"
import Typewriter from 'typewriter-effect';

function generateRandomCandle(index: number) {
  const isGreen = Math.random() > 0.5;
  const color = isGreen ? "#4CAF50" : "#F44336";
  const x = 5 + index * 10;
  
  const totalHeight = Math.random() * 20 + 10;
  const bodyHeight = Math.random() * 3 + 2;
  const wickHeight = Math.random() * 5 + 2;
  
  const bodyStart = (totalHeight - bodyHeight) / 2;
  const bodyEnd = bodyStart + bodyHeight;
  
  const hasTopWick = Math.random() > 0.3;
  const hasBottomWick = Math.random() > 0.3;

  const verticalOffset = Math.random() * 15;

  return (
    <g key={index} transform={`translate(0, ${verticalOffset})`}>
      {/* Top wick */}
      {hasTopWick && (
        <line 
          x1={x} y1={bodyStart - wickHeight} 
          x2={x} y2={bodyStart} 
          stroke={color} 
          strokeWidth="0.2"
        />
      )}
      {/* Candle body */}
      <rect 
        x={x - 1.5} // Increased width of the candle body
        y={bodyStart} 
        width="3" // Increased width of the candle body
        height={bodyHeight} 
        fill={color} 
      />
      {/* Bottom wick */}
      {hasBottomWick && (
        <line 
          x1={x} y1={bodyEnd} 
          x2={x} y2={bodyEnd + wickHeight} 
          stroke={color} 
          strokeWidth="0.2"
        />
      )}
    </g>
  );
}

export default function Hero() {
  const candleCount = 10;
  const [candles, setCandles] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    setCandles(Array.from({ length: candleCount }, (_, i) => generateRandomCandle(i)));
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Candle background */}
      <div className="absolute inset-0 z-10 opacity-20 flex items-center">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 50"
        >
          {candles}
        </svg>
      </div>

      {/* Existing content */}
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Learn the Dark Arts of{' '}
              <span className="text-secondary">
                <Typewriter
                  options={{
                    strings: ['Market Making', 'Algorithmic Trading', 'Crypto Trading Bots', 'Quantitative Research', 'DEX LP-ing'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Masterclasses for crypto market makers and algo traders, taught using the open source Hummingbot framework.
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
