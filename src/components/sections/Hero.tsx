import React from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from "@/components/ui/button"
import CandlesBackground from "@/components/ui/candles-background";
import Link from "next/link";

interface HeroProps {
  coursesLink: string;
}

export default function Hero({ coursesLink }: HeroProps) {
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

      <CandlesBackground />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              Learn how to build{' '}
              <span className="text-secondary">
                <Typewriter
                  options={{
                    strings: ['market making bots', 'DEX arbitrage bots', 'high-frequency trading bots', 'funding rate arbitrage bots', 'data collection bots', 'AMM LP bots'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Education for crypto market makers and algorithmic traders, featuring student-built trading strategies using the Hummingbot open source framework
            </p>
          </div>

          {/* Student Strategy Videos Grid */}
          <div className="mt-12 w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strategy 1 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/asdg8YnFvF8"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-white">
                  Leader-Follower Directional Divergence</h4>
                  <p className="text-sm text-gray-400">xNikos, Cohort 11</p>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/n4UMTY2_j2U"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-white">HedgeDOGE</h4>
                  <p className="text-sm text-gray-400">Jonathan Wagner, Cohort 11</p>
                </div>
              </div>

              {/* Strategy 3 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/b2BL-gCqKYI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-white">Cohort 9 Demo Day</h4>
                </div>
              </div>

              {/* Strategy 4 */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-colors">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/TAulqoSenmk"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-white">Cohort 7 Demo Day</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="space-x-4 space-y-4">
            <Button variant="default" size="lg" asChild>
              <Link href={coursesLink}>
                Explore Courses
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/cohorts">
                Join Next Cohort
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
