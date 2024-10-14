import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Crypto Trader",
      content: "Botcamp transformed my trading strategy. The advanced market making course gave me insights I couldn't find anywhere else."
    },
    {
      name: "Sarah Lee",
      role: "Fintech Developer",
      content: "The hands-on experience with Hummingbot was invaluable. I'm now confidently building and deploying my own trading algorithms."
    },
    {
      name: "Michael Chen",
      role: "Quant Analyst",
      content: "The cohort experience was intense but incredibly rewarding. The network I built here is as valuable as the skills I learned."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
          What Our Students Say
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">{testimonial.name}</CardTitle>
                <CardDescription className="text-gray-400">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.content}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

