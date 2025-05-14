'use client'

import React from 'react'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CandlesBackground from "@/components/ui/candles-background"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Award, Terminal, Trophy, Check, ExternalLink } from "lucide-react"

const COURSES_LINK = "https://courses.botcamp.xyz/slides/all";
const CURRENT_COHORT = 11;
const DEMO_DAY_LINK = "https://www.youtube.com/playlist?list=PLDwlNkL_4MMe8iqlVPmh9QxowovDRR47Q";

export default function Cohort11Page() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground dark">
      <Header coursesLink={COURSES_LINK} />
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg 
              className="w-full h-full" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <pattern id="cohort-page-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M 5 0 L 0 0 0 5" fill="none" stroke="gray" strokeWidth="0.1"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cohort-page-grid)" />
            </svg>
          </div>
          
          <div className="absolute inset-0 z-10 opacity-50">
            <CandlesBackground />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60 z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl relative z-20">
            <div className="flex flex-col items-center space-y-6 text-center mx-auto">
              {/* Badge */}
              <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground shadow-md">
                Completed Cohort
              </div>
              
              {/* Title */}
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white 
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                Botcamp Cohort {CURRENT_COHORT}
              </h1>
              
              {/* Description */}
              <p className="mx-auto max-w-[700px] text-lg text-white md:text-xl bg-background/10 
                          backdrop-blur-sm px-4 py-2 rounded-lg drop-shadow-md">
                Recap of our April 2025 bootcamp where participants learned to build, deploy, and profit from crypto market making strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:items-center justify-center mt-2">
                {/* Demo day button */}
                <Button asChild size="lg" className="text-lg bg-secondary hover:bg-secondary/90 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <Link href={DEMO_DAY_LINK} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo Day
                  </Link>
                </Button>
                {/* NFT Certificate link */}
                <Button asChild size="lg" variant="outline" className="text-lg border-white/40
                                                                   bg-background/20 backdrop-blur-sm
                                                                   text-white hover:bg-background/30
                                                                   hover:border-white/60 hover:text-primary">
                  <Link href="https://opensea.io/item/ethereum/0x59072271620d3528cb6d7565158b11492b25a4e5/5" target="_blank">
                    <Award className="w-4 h-4 mr-2" />
                    View Certification NFT
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50" id="schedule">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Cohort 11 Overview</h2>
              
              <div className="max-w-[800px] prose prose-zinc dark:prose-invert">
                <p className="text-muted-foreground text-lg">
                  Botcamp Cohort 11 was a 4-week intensive bootcamp from April 8 to April 29, 2025, focused on market making and algorithmic trading. Participants learned theory and technical implementation while building their own custom market making strategies.
                </p>

                <p className="text-muted-foreground mt-4">
                  Each session ran for 1.5 to 2 hours with interactive Q&A, and participants received <span className="font-semibold text-primary">lifetime access</span> to all session recordings, code samples, and course materials.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-card rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl text-primary">📖</span>
                      <h3 className="text-lg font-semibold">Theory Sessions</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Led by Hummingbot core maintainers, covering fundamentals of market making, strategies, and business models.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl text-primary">👨‍💻</span>
                      <h3 className="text-lg font-semibold">Technical Sessions</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Hands-on coding workshops teaching participants to build, test, and deploy trading strategies using Hummingbot.
                    </p>
                  </div>

                  <div className="bg-card rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl text-primary">🏆</span>
                      <h3 className="text-lg font-semibold">Demo Day</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Final project presentations showcasing custom trading strategies and earning certification as Hummingbot developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Timeline summary */}
            <div className="relative border-l border-primary/30 pl-10 ml-6 mt-16 space-y-16 max-w-5xl mx-auto">
              {/* Week 1 */}
              <div className="relative">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Week 1: Foundations</h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                          <p className="text-muted-foreground">Introduction to Market Making and Order Book Mechanics</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-destructive flex-shrink-0" />
                          <p className="text-muted-foreground">Hummingbot Framework and Setting Up Development Environment</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                          <p className="text-muted-foreground">Pure Market Making Strategies and Risk Management</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-destructive flex-shrink-0" />
                          <p className="text-muted-foreground">Strategy Controllers and Implementation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Week 2 */}
              <div className="relative">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Week 2: Advanced Techniques</h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                          <p className="text-muted-foreground">Advanced Market Making Strategies and Cross-Exchange Techniques</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-destructive flex-shrink-0" />
                          <p className="text-muted-foreground">Custom Strategy Coding and Multi-Controller Configurations</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                          <p className="text-muted-foreground">Market Making Business Models and Operational Security</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-destructive flex-shrink-0" />
                          <p className="text-muted-foreground">Production Deployment and Infrastructure Setup</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Week 3 */}
              <div className="relative">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Week 3: Implementation & Coaching</h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                          <p className="text-muted-foreground">Daily Office Hours with Instructors for Individual Strategy Development</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Terminal className="h-5 w-5 text-destructive flex-shrink-0" />
                          <p className="text-muted-foreground">Strategy Implementation and Backtesting</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0" />
                          <p className="text-muted-foreground">Optimization Techniques and Parameter Tuning</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Week 4 */}
              <div className="relative">
                <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Week 4: Culmination & Certification</h3>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-3">
                          <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
                          <p className="text-muted-foreground">Demo Day Presentations and Strategy Showcases</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-primary flex-shrink-0" />
                          <p className="text-muted-foreground">Official Hummingbot Certification and Recognition</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Demo day highlight */}
            <div className="mt-24 max-w-4xl mx-auto">
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="p-8 bg-primary/5">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <Trophy className="h-16 w-16 text-primary" />
                    <h3 className="text-2xl md:text-3xl font-bold">Demo Day Highlights</h3>
                    <p className="text-muted-foreground max-w-2xl">
                      On April 29, 2025, Cohort 11 participants presented their custom trading strategies, showcasing innovative approaches to market making and algorithmic trading across various crypto markets.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full mt-4">
                      <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-sm">12 certified Hummingbot developers</p>
                      </div>
                      <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-sm">8 unique market making strategies</p>
                      </div>
                      <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-sm">4 exchange integrations showcased</p>
                      </div>
                      <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <p className="text-sm">3 profitable strategies in production</p>
                      </div>
                    </div>

                    <Button asChild size="lg" className="mt-4">
                      <Link href={DEMO_DAY_LINK} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Watch Demo Day Recordings
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            
            {/* Next cohort CTA */}
            <div className="mt-24 text-center">
              <h3 className="text-2xl font-bold mb-6">Interested in joining our next cohort?</h3>
              <Button asChild size="lg">
                <Link href="/cohorts">
                  View Upcoming Cohorts
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer coursesLink={COURSES_LINK} />
    </div>
  )
}