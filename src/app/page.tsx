'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap, ArrowRight, Bot, Calendar, Star } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function BotcampLandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-primary">Botcamp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            Cohorts
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Learn the Dark Arts of Market Making
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Master algo trading and market making with Botcamp, using the powerful open-source Hummingbot framework.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default">Explore Courses</Button>
                <Button variant="outline" className="text-black bg-white hover:bg-gray-100 hover:text-black">Join a Cohort</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Why Choose Botcamp?</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <TrendingUp className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-white">Master Algo Trading</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Learn to create, test, and deploy sophisticated trading algorithms using Hummingbot.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-white">Join the Dark Side</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Connect with fellow traders and market makers in our exclusive community.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-white">Real-World Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Apply your skills immediately with live trading exercises and real market data.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">Our Courses</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
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
              ].map((course, index) => (
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Premium 6-Week Cohorts
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Take your trading to the next level with our intensive, personalized cohort programs.
                </p>
              </div>
              <Card className="w-full max-w-3xl bg-gray-800 border-gray-700">
                <CardHeader>
                  <Calendar className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle className="text-white">Exclusive Bootcamp Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Small group sizes for personalized attention</li>
                    <li>Live sessions with expert traders and market makers</li>
                    <li>Hands-on projects using real market data</li>
                    <li>Networking opportunities with industry professionals</li>
                    <li>Certificate of completion and ongoing community access</li>
                  </ul>
                  <Button className="mt-6" variant="default" size="lg">
                    Apply for Next Cohort
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              What Our Students Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
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
              ].map((testimonial, index) => (
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "What experience do I need to join Botcamp?",
                  answer: "While some programming experience is helpful, our courses are designed for various skill levels. Beginners can start with our Intro courses, while more experienced traders can jump into advanced topics."
                },
                {
                  question: "How does the cohort program differ from individual courses?",
                  answer: "Cohorts offer a more intensive, personalized experience with live sessions, peer interaction, and direct mentorship from industry experts. Individual courses allow for self-paced learning focused on specific topics."
                },
                {
                  question: "Can I use what I learn at Botcamp for real trading?",
                  answer: "Our curriculum is designed to give you practical, applicable skills. However, always remember that trading involves risk, and it's important to practice with simulations before using real funds."
                },
                {
                  question: "What kind of support do you offer after course completion?",
                  answer: "All Botcamp graduates gain access to our alumni network and ongoing community resources. This includes forums, webinars, and opportunities to connect with fellow traders and industry professionals."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Dominate the Markets?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Join the ranks of elite traders who are reshaping the landscape of algorithmic trading with Botcamp.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default" size="lg">
                  Explore Courses
                </Button>
                <Button variant="outline" size="lg" className="text-black bg-white hover:bg-gray-100 hover:text-black">
                  Join a Cohort
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Botcamp. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}