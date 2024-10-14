import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Courses() {
  const courses = [
    { 
      title: "Intro to Algo Trading", 
      description: "Learn the fundamentals of algorithmic trading and how to automate your trading strategies." 
    },
    { 
      title: "Intro to Market Making", 
      description: "Discover the basics of market making and how to provide liquidity in cryptocurrency markets." 
    },
    { 
      title: "Advanced Market Making: Hedging Risk on Multiple Exchanges", 
      description: "Master complex market making strategies and learn how to manage risk across various exchanges." 
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Courses</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{course.description}</CardDescription>
                <Button className="mt-4" variant="outline">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

