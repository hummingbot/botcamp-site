'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Award, Check } from "lucide-react"

interface Cohort11ScheduleProps {
  cohortLink: string
  helioLink: string
  startDate: Date
}

export default function Cohort11Schedule({ 
  cohortLink, 
  helioLink, 
  startDate 
}: Cohort11ScheduleProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50" id="schedule">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Botcamp Cohort 11 Schedule</h2>
          
          <div className="max-w-[800px] prose prose-zinc dark:prose-invert">
            <p className="text-muted-foreground text-lg">
              A Botcamp cohort is an intensive 4-week bootcamp that teaches participants the theory, business, and technical aspects of market making. By the end of the cohort, students will have designed and coded their own custom market making strategy and earned an official Hummingbot Certification.
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
                  <p className="text-muted-foreground">
                    Begin your journey by completing the Intro to Algo Trading course, which will establish the foundational knowledge needed for the bootcamp. The course includes hands-on coding challenges to get you comfortable with the basics of algorithmic trading before the live sessions begin.
                  </p>
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
                          <p className="text-sm text-muted-foreground">Tuesday April 8, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Your journey begins with understanding the fundamentals of trading bots. We'll explore order book mechanics including the difference between makers and takers, and how queue priority affects your trades. You'll learn about different exchange types (spot vs. perpetual, centralized vs. decentralized) and gain insights into directional trading strategies that form the basis of algorithmic trading.
                    </p>
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
                          <p className="text-sm text-muted-foreground">Wednesday April 9, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Dive into the technical architecture of Hummingbot with a comprehensive overview of the framework including core components, connector design, strategy implementation, and complementary services. You'll set up your development environment and learn scripting basics such as accessing order books, retrieving candle data, executing trades, and handling events. The session concludes with an introduction to the powerful StrategyV2 framework, covering executors and controllers.
                    </p>
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
                          <p className="text-sm text-muted-foreground">Thursday April 10, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Explore the concept of market making in depth, learning how to select ideal markets for your strategies. You'll study the influential Avellaneda & Stoikov paper that forms the theoretical foundation for many modern market making approaches. The session covers essential aspects of measuring profitability and implementing risk management techniques to protect your capital while maximizing returns.
                    </p>
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
                          <p className="text-sm text-muted-foreground">Friday April 11, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      This hands-on session focuses on implementing trading strategies through Hummingbot's controller system. You'll work with directional controllers including Bollinger Bands and MACD indicators, and even code a new controller from scratch during the live session. The class also covers market making controllers that operate around mid-price with dynamic spreads, as well as generic controllers for arbitrage and cross-exchange market making.
                    </p>
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
                    <p className="text-muted-foreground">
                      Choose a strategy type as your focus area and complete the corresponding course materials and coding challenges. Begin designing your own trading strategy using the provided Design Template, laying the groundwork for your final project.
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
                          <h4 className="font-bold text-lg">Advanced Market Making Strategies</h4>
                          <p className="text-sm text-muted-foreground">Tuesday April 15, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Elevate your trading expertise by exploring sophisticated strategies including arbitrage, cross-exchange market making, and grid trading approaches. This session will help you develop the critical thinking needed to select the optimal strategy for different market conditions and trading objectives, giving you a comprehensive toolkit for algorithmic trading.
                    </p>
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
                          <p className="text-sm text-muted-foreground">Wednesday April 16, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Enhance your trading algorithms with practical coding exercises to add multi-timeframe support to directional strategies. You'll develop a statistical arbitrage controller from scratch and learn how to create configurations that run multiple controllers within the same bot instance, maximizing efficiency and creating sophisticated trading systems.
                    </p>
                  </CardContent>
                </Card>

                {/* Session 7 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-primary">📖</span>
                        <div>
                          <h4 className="font-bold text-lg">The Business of Market Making</h4>
                          <p className="text-sm text-muted-foreground">Thursday April 17, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Theory</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Transition from technical concepts to business applications by exploring market maker business models including proprietary trading, market making-as-a-service, and token-based financial products. Learn to identify lucrative opportunities and potential clients while mastering the art of scaling your operations through team growth and portfolio management. The session concludes with critical operational security practices to protect your assets and trading systems.
                    </p>
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
                          <p className="text-sm text-muted-foreground">Friday April 18, 2025</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-primary/5">Technical</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Prepare for real-world deployment with a deep dive into the Backend API architecture and production setup. You'll learn how to securely deploy the full stack of Backend API, Dashboard, and Broker services, including security best practices. The session covers deploying bots on cloud providers and using the Quants-Lab to interact with the Backend API for managing configurations, monitoring account balances, and controlling bot operations.
                    </p>
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
                    <p className="text-muted-foreground">
                      Complete your strategy design template and begin implementing your custom controller. Analyze the notebooks in the Hummingbot quants-lab repository to improve your strategy's analytical foundation. Set up your production environment and deploy a bot running at least three different controller configurations to gain practical deployment experience.
                    </p>
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
                            <h5 className="font-medium">Office Hours with Mike</h5>
                            <p className="text-sm text-muted-foreground">Tuesday April 22, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Office Hours with Fede</h5>
                            <p className="text-sm text-muted-foreground">Wednesday April 23, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Office Hours with Mike</h5>
                            <p className="text-sm text-muted-foreground">Thursday April 24, 2025</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/60 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg text-primary">🙋</span>
                          <div>
                            <h5 className="font-medium">Office Hours with Fede</h5>
                            <p className="text-sm text-muted-foreground">Friday April 25, 2025</p>
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
                      <p className="text-muted-foreground">
                        Complete the implementation of your custom trading controller and create a 5-minute video presentation that demonstrates your strategy in action. Your video should explain the strategy's concept, implementation details, and show it running in a production environment—preparing you for the final Demo Day presentation.
                      </p>
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
                          <p className="text-sm text-muted-foreground">Tuesday April 29, 2025</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        The culmination of your Botcamp journey arrives with Demo Day, where each participant's video presentation will be showcased to the entire cohort. This celebration of achievement gives you the opportunity to present your trading strategy to peers and instructors while learning from the diverse approaches of fellow participants. The session concludes with students voting for the Cohort MVP, recognizing exceptional innovation and execution in strategy development.
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
                            Upon completing Demo Day, you'll be officially certified as a Hummingbot Market Maker. This prestigious recognition includes:
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
                          <p className="text-muted-foreground italic text-sm">
                            Certification types include Market Maker, Strategy V2 Developer, and Script Developer based on your final project implementation.
                          </p>
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
              Join Botcamp Cohort 11 and learn professional market making.
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