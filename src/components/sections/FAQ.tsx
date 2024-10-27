import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need coding experience to take Botcamp?",
      answer: "No, you don't... there are separate sessions for tech and non-tech, and you can select which to attend"
    },
    {
      question: "How long will I have access to the course content?",
      answer: "Botcamp students have lifetime access to their course content and live session recordings."
    },
    {
      question: "Will the program have non-English content?",
      answer: "The primary course content and weekly live sessions are in English, and recordings have English subtitles. Botcamp instructors and mentors are fluent in other languages such as Mandarin Chinese, Vietnamese, and Russian."
    },
    {
      question: "How much does Botcamp cost?",
      answer: "Botcamp courses, in-depth tutorials on various types of algo trading strategies, start at $199. Purchasers receive lifetime access to all course content, videos, and quizzes.\n\nBotcamp cohorts, 5-week bootcamps are more expensive due to personalized... Students can receive discounts for registering early and earn back their tuittion by winning challenges."
    },
    {
      question: "What have past Botcamp students done afterwards?",
      answer: "Past Botcamp graduates have:\n\n- Landed a trading job at a crypto market making firm\n- Ran a market making bot for their own token\n- Built a consistently profitable trading strategy\n- Partnered with other Botcamp members to work on projects together\n- Become a mentor in future Botcamp cohorts"
    },
    {
      question: "Can I contribute to the Hummingbot open source codebase?",
      answer: "Yes! Botcamp members have created many of the Community Scripts in the official Hummingbot codebase, and students continue to contribute code and earn dev bounties after they earn their certificate."
    },
    {
      question: "Do you offer scholarships or other discounts?",
      answer: "Since the entire Hummingbot codebase is open source, anyone can actually build the same algo trading strategies that we teach in Botcamp for free.\n\nFor that reason and in order to provide a great experience to all paying students, we currently do not offer any scholarships or discounts to Botcamp cohorts."
    },
    {
      question: "Can I get reimbursed by my company?",
      answer: "For all Botcamp purchases, you receive an invoice that describes the program. Depending on your company policies, you may be able to expense the program from your company's learning or development budgets."
    },
    {
      question: "Can I get pay with crypto?",
      answer: "Yes, we accept major stablecoins, BTC, and ETH across a variety of blockchain networks. To arrange a crypto payment for a Botcamp cohort or course, please email operations@botcamp.xyz"
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white text-lg md:text-xl hover:no-underline hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base md:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
