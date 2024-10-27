import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Calendar, Code, Presentation, Users, Award } from "lucide-react"

export default function CohortSchedule() {
  const schedule = [
    {
      week: 1,
      title: "Getting Started",
      events: [
        {
          icon: Presentation,
          title: "Live Session",
          description: "Introduction to algorithmic trading and market making fundamentals"
        },
        {
          icon: Users,
          title: "Office Hours",
          description: "Setting up your development environment"
        }
      ]
    },
    {
      week: 2,
      title: "Market Making Basics",
      events: [
        {
          icon: Presentation,
          title: "Live Session",
          description: "Understanding order books, spreads, and basic market making strategies"
        }
      ]
    },
    {
      week: 3,
      title: "Advanced Strategies",
      events: [
        {
          icon: Presentation,
          title: "Live Session",
          description: "Cross-exchange arbitrage and advanced market making techniques"
        },
        {
          icon: Users,
          title: "Office Hours",
          description: "Strategy optimization and parameter tuning"
        }
      ]
    },
    {
      week: 4,
      title: "Risk Management",
      events: [
        {
          icon: Presentation,
          title: "Live Session",
          description: "Position management, hedging, and risk controls"
        }
      ]
    },
    {
      week: 5,
      title: "Project Development",
      events: [
        {
          icon: Code,
          title: "Project Workshop",
          description: "Hands-on development of your trading strategy"
        },
        {
          icon: Users,
          title: "Office Hours",
          description: "Project guidance and troubleshooting"
        }
      ]
    },
    {
      week: 6,
      title: "Certification",
      events: [
        {
          icon: Award,
          title: "Final Presentation",
          description: "Present your project and earn your Hummingbot certification"
        }
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(circle_at_center,rgba(95,215,255,0.2)_0%,rgb(0,0,0)_100%)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            6-Week Program Schedule
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
            {schedule.map((week, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-white">Week {week.week}: {week.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {week.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start space-x-3">
                        <event.icon className="h-5 w-5 text-secondary mt-1" />
                        <div>
                          <h4 className="text-white font-medium">{event.title}</h4>
                          <p className="text-gray-400 text-sm">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}