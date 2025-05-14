import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface WorkshopScheduleProps {
  workshopLink: string;
  helioLink?: string;
  startDate?: Date;
}

export default function WorkshopSchedule({ workshopLink }: WorkshopScheduleProps) {
  // Using a fixed date for calculation
  const fixedStartDate = new Date('2025-05-01');
  const daysUntilStart = Math.ceil((fixedStartDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  const schedule = [
    {
      week: 1,
      sessions: [
        {
          time: "Monday 10:00 AM",
          title: "Setting Up Pipeline",
          description: "Learn to set up your AI trading bot infrastructure"
        },
        {
          time: "Wednesday 10:00 AM",
          title: "Make Your Bot Smarter",
          description: "Deep dive into LangChain implementation and architecture"
        },
        {
          time: "Friday 10:00 AM",
          title: "Get Your Bot Talking",
          description: "Integrate Twitter API for social media interactions"
        }
      ]
    },
    {
      week: 2,
      sessions: [
        {
          time: "Monday 10:00 AM",
          title: "Let Your Bot Trade",
          description: "Connect Hummingbot and GeckoTerminal for Solana trading"
        },
        {
          time: "Wednesday 10:00 AM",
          title: "Office Hours",
          description: "Live coding session and Q&A for your specific bot"
        },
        {
          time: "Friday 10:00 AM",
          title: "Launch Day",
          description: "Project presentations and community voting"
        }
      ]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[radial-gradient(circle_at_center,rgba(95,215,255,0.2)_0%,rgb(0,0,0)_100%)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-white">
            Workshop Schedule
          </h2>
          <p className="text-xl text-primary text-center mb-12">
            {fixedStartDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            {daysUntilStart > 0 && (
              <span className="ml-2 text-gray-400">
                (Starts in {daysUntilStart} days)
              </span>
            )}
          </p>

          {schedule.map((week, weekIndex) => (
            <div key={weekIndex} className="w-full max-w-5xl mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Week {week.week}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {week.sessions.map((session, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-6 w-6 text-primary" />
                        <CardTitle className="text-white">{session.time}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-lg font-semibold text-white mb-2">{session.title}</h4>
                      <p className="text-gray-400">{session.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 text-center">
            <button
              className="px-8 py-4 bg-primary hover:bg-secondary text-black font-semibold rounded-lg text-lg transition-colors"
              onClick={() => window.open(workshopLink, "_blank")}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}