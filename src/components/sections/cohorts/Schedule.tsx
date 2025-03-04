import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Calendar, BookOpen, Users, Award, Terminal, Trophy } from "lucide-react"

interface CohortScheduleProps {
  cohortLink: string;
  helioLink: string;
  startDate: Date;
}

export default function CohortSchedule({ cohortLink, helioLink, startDate }: CohortScheduleProps) {
  const daysUntilStart = Math.ceil((startDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  
  // Add legend items before schedule
  const trackLegend = [
    {
      icon: BookOpen,
      title: "Market Maker Track",
      description: "Live sessions that teach the theory and practice of market making",
      colorClass: "text-accent"
    },
    {
      icon: Terminal,
      title: "Developer Track",
      description: "Live sessions that teach how to code a custom algo trading strategy",
      colorClass: "text-destructive"
    }
  ]

  const schedule = [
    {
      week: 1,
      title: "Getting Started",
      events: [
        {
          icon: BookOpen,
          title: "Intro to Market Making",
          description: "Market maker business models, requirements, and exchange landscape overview",
          colorClass: "text-accent"
        },
        {
          icon: Terminal,
          title: "The Hummingbot V2 Framework",
          description: "Advanced strategy framework overview and creating simple tasks with controllers",
          colorClass: "text-destructive"
        }
      ]
    },
    {
      week: 2,
      title: "Running Strategies",
      events: [
        {
          icon: BookOpen,
          title: "The Pure Market Making Strategy",
          description: "Order books, spreads, and using Dashboard for market making",
          colorClass: "text-accent"
        },
        {
          icon: Terminal,
          title: "Conducting Research with Quants Lab",
          description: "Fetching historical data and designing strategies with Jupyter notebooks",
          colorClass: "text-destructive"
        }
      ]
    },
    {
      week: 3,
      title: "Managing Risk",
      events: [
        {
          icon: BookOpen,
          title: "Impermanent Loss and Other Risks",
          description: "Key risks and mitigation strategies for market makers on both CEX and DEX",
          colorClass: "text-accent"
        },
        {
          icon: Terminal,
          title: "Custom Strategies and Backtesting",
          description: "Coding, backtesting, and forward testing a custom strategy controller",
          colorClass: "text-destructive"
        }
      ]
    },    {
      week: 4,
      title: "Market Making in Production",
      events: [
        {
          icon: BookOpen,
          title: "Market Making at Scale",
          description: "How professional market makers run many bots and manage risk across their portfolio",
          colorClass: "text-accent"
        },
        {
          icon: Terminal,
          title: "Strategy Optimization and Deployment",
          description: "Hyper-parameter optimization with Optuna and bot deployment via Backend API",
          colorClass: "text-destructive"
        }
      ]
    },
    {
      week: 5,
      title: "Custom Strategy Development",
      events: [
        {
          icon: Users,
          title: "Office Hours",
          description: "Get help from instructors and mentors to develop your custom strategy",
          colorClass: "text-secondary"
        },
      ]
    },
    {
      week: 6,
      title: "Demo Day & Certification",
      events: [
        {
          icon: Trophy,
          title: "Demo Day",
          description: "Present your project to earn your Hummingbot certification and compete for prizes",
          colorClass: "text-accent"
        },
        {
          icon: Award,
          title: "NFT Certification",
          description: "Receive your official Hummingbot Market Maker or Strategy Developer NFT certification",
          colorClass: "text-primary"
        }
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(circle_at_center,rgba(95,215,255,0.2)_0%,rgb(0,0,0)_100%)] relative">
      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-white">
            Cohort 10 Schedule
          </h2>
          <p className="text-xl text-primary text-center mb-8">
            Starts November 5, 2024
          </p>
          
          {/* Track legend with fading lines */}
          <div className="w-full my-12 flex flex-col gap-6">
            <div className="w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {trackLegend.map((track, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <track.icon className={`h-6 w-6 ${track.colorClass} mt-1`} />
                  <div>
                    <h4 className="text-white font-medium">{track.title}</h4>
                    <p className="text-gray-400 text-sm">{track.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mb-8">
              <p className="max-w-2xl mx-auto">
                You can attend either track, or both tracks - it's up to you!
              </p>
            </div>
            <div className="w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </div>

          {/* Replace the grid with timeline */}
          <div className="relative w-full max-w-4xl mx-auto px-4 md:px-0">
            {/* Vertical line - hide on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 to-primary/20 hidden md:block" />
            
            {schedule.map((week, index) => (
              <div key={index} className="relative flex items-center mb-16 last:mb-0">
                {/* Timeline dot - hide on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-gray-900 hidden md:block" />
                
                {/* Content card - full width on mobile */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  <Card className="bg-gray-900 border-gray-800 transform transition-all hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-6 w-6 text-primary" />
                        <CardTitle className="text-white text-2xl font-bold">Week {week.week}: {week.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {week.events.map((event, eventIndex) => (
                          <div key={eventIndex} className="flex items-start space-x-3">
                            <event.icon className={`h-5 w-5 ${event.colorClass || "text-secondary"} mt-1`} />
                            <div>
                              <h4 className="text-white font-medium">{event.title}</h4>
                              <p className="text-gray-400 text-sm">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/4 mx-auto h-px mt-8 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          
          {/* New CTA section with increased margin */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
              {daysUntilStart <= 0 
                ? "The current Botcamp has started, but you might be able to join late..."
                : `The next Botcamp cohort starts in ${daysUntilStart} days`
              }
            </h3>
            <div className="flex flex-col items-center gap-2">
              <button
                className="px-8 py-4 bg-primary hover:bg-secondary text-black font-semibold rounded-lg text-lg transition-colors"
                onClick={() => window.open(cohortLink, "_blank")}
              >
                Enroll Now
              </button>
              <a 
                href={helioLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-gray-300"
              >
                Chat in Telegram
              </a>
              <p className="text-xs text-gray-500 mt-1 max-w-xs text-center">
                Ask us anything about botcamp, like payment methods, team discounts, and what you'll learn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
