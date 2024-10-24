import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { ArrowRight, Video, HelpCircle, Trophy, Code, BookOpen, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"

const getIconColor = (index: number) => {
  switch (index % 3) {
    case 0:
      return "text-primary";
    case 1:
      return "text-accent";
    case 2:
      return "text-destructive";
    default:
      return "text-primary";
  }
};

export default function Courses() {
  const courseFeatures = [
    { icon: Video, title: "Videos", description: "Engage with our comprehensive video lessons that break down complex concepts into easy-to-understand segments." },
    { icon: HelpCircle, title: "Quizzes", description: "Test your knowledge and reinforce your learning with interactive quizzes designed to challenge and educate." },
    { icon: Trophy, title: "Challenge", description: "Put your skills to the test with real-world trading scenarios and problem-solving exercises." },
    { icon: Code, title: "Code", description: "Get hands-on experience with coding exercises that simulate real trading algorithms and strategies." },
    { icon: BookOpen, title: "Theory", description: "Dive deep into the theoretical foundations of algorithmic trading and market making." },
    { icon: Cog, title: "Hands-On", description: "Apply your knowledge through practical, hands-on projects that mirror industry practices." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Courses</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl">
            Master algorithmic trading and market making with our comprehensive courses. From beginners to advanced traders, we&apos;ve got you covered.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-12">
            {courseFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <feature.icon className={`h-8 w-8 ${getIconColor(index)}`} />
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="text-lg" size="lg" asChild>
            <a href="https://www.botcamp.xyz/slides/all" target="_blank" rel="noopener noreferrer">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
