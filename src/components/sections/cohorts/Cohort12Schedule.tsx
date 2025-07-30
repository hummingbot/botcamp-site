'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Award, Check } from "lucide-react"

interface Cohort12ScheduleProps {
  cohortLink: string
  helioLink: string
  startDate?: Date
}

export default function Cohort12Schedule({
  cohortLink,
  helioLink
}: Cohort12ScheduleProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50" id="schedule">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Botcamp Cohort 12 Schedule</h2>
          
          <div className="max-w-[800px] prose prose-zinc dark:prose-invert">
            <p className="text-muted-foreground text-lg">
              Each session runs for 1-2 hours with interactive Q&A, and participants receive <span className="font-semibold text-primary">lifetime access</span> to all session recordings, code samples, and course materials.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl text-primary">📖</span>
                  <h3 className="text-lg font-semibold">Theory Sessions</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Taught by Hummingbot core maintainers, these sessions cover fundamental market making concepts, strategies, and business models.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl text-primary">👨‍💻</span>
                  <h3 className="text-lg font-semibold">Technical Sessions</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Hands-on coding workshops where you'll learn to build, test, and deploy algorithmic trading strategies using Hummingbot.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl text-primary">🏆</span>
                  <h3 className="text-lg font-semibold">Demo Day</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Present your custom trading strategy to peers and industry experts, showcasing your skills and earning certification as a Hummingbot developer.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Timeline for all weeks */}
        <div className="relative border-l border-primary/30 pl-10 ml-6 mt-16 space-y-16">
          {/* Week 0 */}
          <div className="relative">
            <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
              <span className="text-sm font-bold">0</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Week 0: Preparation</h3>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl text-primary">✍️</span>
                    <div>
                      <h4 className="font-bold text-lg">Prework</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Starting one week before the cohort begins, you'll receive premium support from the Botcamp team to ensure you're fully prepared. This preparation week includes guided installation and setup of all required tools, along with foundational coursework to establish the knowledge needed for the bootcamp.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Go through the <a href="https://courses.botcamp.xyz/slides/intro-to-algo-trading-1" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Intro to Algo Trading</a> course and code the challenges</li>
                    <li>Install Hummingbot client (with Botcamp team support)</li>
                    <li>Install Gateway (with Botcamp team support)</li>
                    <li>Install Deploy Repo (Dashboard + Hummingbot API) (with Botcamp team support)</li>
                    <li>Connect credentials and validate that you can see balances / run strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Week 1 */}
          <div className="relative">
            <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
              <span className="text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Week 1: Foundations</h3>
              <div className="space-y-6">
                {/* Session 1 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">📖</span>
                        <div>
                          <h4 className="font-bold text-lg">Introduction to Market Making</h4>
                          <p className="text-sm text-muted-foreground">Tuesday Sept 9, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Your journey begins with understanding the fundamentals of market making. We'll explore:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>What is market making?</li>
                      <li>Order book mechanics - Makers vs Takers, Queue Priority</li>
                      <li>Exchange types - Spot vs Perpetual, CEX vs DEX</li>
                      <li>Types of trading strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 2 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">👨‍💻</span>
                        <div>
                          <h4 className="font-bold text-lg">The Hummingbot Open Source Framework</h4>
                          <p className="text-sm text-muted-foreground">Wednesday Sept 10, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Dive into the technical architecture of Hummingbot:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Hummingbot framework overview - Core architecture, Connectors design, Strategy design</li>
                      <li>Complementary services (Dashboard, Hummingbot-API, Broker)</li>
                      <li>Environment setup (debug + autostart)</li>
                      <li>Scripts basics - Accessing the OrderBook, Getting Candles, Executing trades, Events</li>
                      <li>Introduction to the StrategyV2 framework - Executors and Controllers</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 3 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">📖</span>
                        <div>
                          <h4 className="font-bold text-lg">Pure Market Making Strategies</h4>
                          <p className="text-sm text-muted-foreground">Thurs Sept 11, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Explore pure market making strategies in depth:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>What is market making?</li>
                      <li>Running Simple Market Making Strategy</li>
                      <li>Avellaneda & Stoikov paper</li>
                      <li>PMM Controller</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 4 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">👨‍💻</span>
                        <div>
                          <h4 className="font-bold text-lg">StrategyV2 Controllers</h4>
                          <p className="text-sm text-muted-foreground">Friday Sept 12, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      This hands-on session focuses on implementing StrategyV2 controllers:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Directional controllers - Bollinger, MACD BB, Coding a new one live</li>
                      <li>Market making controllers - Market Making around mid-price, Introducing price shift and dynamic spreads</li>
                      <li>Generic controllers - Arbitrage, XEMM</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 1 Homework */}
                <Card className="overflow-hidden border-primary/30">
                  <CardContent className="p-6 bg-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl text-primary">✍️</span>
                      <div>
                        <h4 className="font-bold text-lg">Week 1 Homework</h4>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Pick a strategy type and go through the course and code the challenges
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Market Making Strategies</li>
                          <li>Directional strategies and V2 framework</li>
                        </ul>
                      </li>
                      <li>Design your strategy with the Design Template</li>
                    </ul>
                    <p className="text-muted-foreground text-sm mt-4">
                      <strong>Additional tasks:</strong> Install Hummingbot and add API keys, Go through initial 2 courses (Intro to Algo Trading, Market Making), Run V2 PMM Controller, Start Designing Your Strategy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Week 2 */}
          <div className="relative">
            <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground">
              <span className="text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Week 2: Advanced Techniques</h3>
              <div className="space-y-6">
                {/* Session 5 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">📖</span>
                        <div>
                          <h4 className="font-bold text-lg">DEX Market Making Strategies</h4>
                          <p className="text-sm text-muted-foreground">Tues Sept 16, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Explore decentralized exchange (DEX) strategies:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Strategy selection</li>
                      <li>Blockchain/DEX Basics</li>
                      <li>DEX Arbitrage strategies</li>
                      <li>DEX LP strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 6 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">👨‍💻</span>
                        <div>
                          <h4 className="font-bold text-lg">Coding Custom Strategies</h4>
                          <p className="text-sm text-muted-foreground">Wed Sept 17, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Enhance your trading algorithms with advanced coding techniques:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Add multi-timeframe support to a directional strategy</li>
                      <li>Coding a statistical arbitrage controller</li>
                      <li>Creating configs and running multiple controllers in the same bot</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 7 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">📖</span>
                        <div>
                          <h4 className="font-bold text-lg">Running Hummingbot DEX Strategies</h4>
                          <p className="text-sm text-muted-foreground">Thurs Sept 18, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Learn to run Hummingbot with decentralized exchange strategies:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Example scripts
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>AMM Data Feed</li>
                          <li>AMM Trade</li>
                          <li>LP Management</li>
                          <li>Arbitrage Controller</li>
                        </ul>
                      </li>
                      <li>More complex DEX strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Session 8 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">👨‍💻</span>
                        <div>
                          <h4 className="font-bold text-lg">Running Hummingbot in Production</h4>
                          <p className="text-sm text-muted-foreground">Friday September 19, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Prepare for real-world deployment:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Hummingbot API architecture</li>
                      <li>Deployment - Security overview</li>
                      <li>Deploying HB API on cloud providers</li>
                      <li>Interacting with HB API from Quants-Lab - Configs, Account balances, Deploying controllers, Stopping controllers</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Week 2 Homework */}
                <Card className="overflow-hidden border-primary/30">
                  <CardContent className="p-6 bg-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xl text-primary">✍️</span>
                      <div>
                        <h4 className="font-bold text-lg">Week 2 Homework</h4>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      <li>Finish the design template and start implementing your controller</li>
                      <li>Analyze the notebooks of `hummingbot/quants-lab` and ask any questions that will help you improve the analysis of your controller</li>
                      <li>Set up your production server and deploy a bot with 3+ controller configs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                  <div className="flex flex-col space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-4">Personalized Office Hours</h4>
                      <p className="text-muted-foreground mb-6">
                        Week 3 is dedicated to intensive implementation of your trading strategy with personalized support. Daily office hours with our expert instructors provide one-on-one guidance as you build your custom trading controller. These sessions offer the perfect opportunity to troubleshoot challenges, refine your approach, and ensure your strategy is market-ready.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Hummingbot Advanced Technical + Wrap-Up (Fede)</h5>
                            <p className="text-sm text-muted-foreground">Tues Sept 23, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Gateway Advanced Technical + Wrap-Up (Mike)</h5>
                            <p className="text-sm text-muted-foreground">Wed Sept 24, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Final Office Hours (Fede)</h5>
                            <p className="text-sm text-muted-foreground">Thurs Sept 25, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Final Office Hours (Mike)</h5>
                            <p className="text-sm text-muted-foreground">Friday Sept 26, 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl text-primary">✍️</span>
                        <div>
                          <h4 className="font-bold text-lg">Week 3 Homework</h4>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        <li>Finish the implementation of your controller</li>
                        <li>Create a 5-minute video explaining the strategy and running it in production</li>
                      </ul>
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
                  <div className="flex flex-col space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xl text-primary">🥳</span>
                        <div>
                          <h4 className="font-bold text-lg">Demo Day</h4>
                          <p className="text-sm text-muted-foreground">Tuesday Sept 30, 2025</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        The culmination of your Botcamp journey arrives with Demo Day. We will play each submitted video presentation, allowing participants to showcase their custom trading strategies to peers and instructors. The session concludes with students voting for the Cohort MVP, recognizing exceptional innovation and execution in strategy development.
                      </p>
                    </div>
                    
                    <div className="border-t border-border pt-6">
                      <div className="flex items-center gap-3 mb-4 justify-center">
                        <span className="text-xl text-primary">🏆</span>
                        <div>
                          <h4 className="font-bold text-lg">Official Certification</h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-center max-w-2xl mx-auto">
                        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
                          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/10 flex items-center justify-center">
                            <Award className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="text-muted-foreground mb-4">
                            Upon completing Demo Day, you'll earn a Hummingbot Certification in Market Making Strategy Development. This prestigious recognition includes:
                          </p>
                          <ul className="space-y-2 mb-4 text-left">
                            <li className="flex gap-2">
                              <Check className="flex-shrink-0 h-5 w-5 text-primary" />
                              <span className="text-sm">Addition to the official <a href="https://hummingbot.org/certification/list/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Hummingbot Certified Developers List</a></span>
                            </li>
                            <li className="flex gap-2">
                              <Check className="flex-shrink-0 h-5 w-5 text-primary" />
                              <span className="text-sm">Digital certification badge for your LinkedIn profile and resume</span>
                            </li>
                            <li className="flex gap-2">
                              <Check className="flex-shrink-0 h-5 w-5 text-primary" />
                              <span className="text-sm">Priority access to Hummingbot ecosystem opportunities and partnerships</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="relative z-10 mt-20 max-w-xl mx-auto">
          <div className="bg-card rounded-xl shadow-lg p-8 border">
            <h3 className="text-2xl font-bold mb-4 text-center">Ready to transform your trading skills?</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Join Botcamp Cohort 12 and learn professional market making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full">
                <Link href={cohortLink} target="_blank">
                  Enroll Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href={helioLink} target="_blank">
                  Chat in Telegram
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}