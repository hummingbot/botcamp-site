import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function CohortFAQ() {
    const faqs = [
      {
        question: "How many sessions are there in a Botcamp cohort?",
        answer: "During a 6 week cohort, students get access to 5 online live instruction sessions (90 min) and 3 mentor office hour sessions (60-90 min). They also get access to private #botcamp Discord channels."
      },
      {
        question: "What's the expected time commitment for a Botcamp cohort?",
        answer: "We understand that you might get busy. You can defer your enrollment to the next quarterly cohort for free until after second weekly live session. After the second live session, no deferrals are allowed."
      },
      {
        question: "What happens if I can't make a live session?",
        answer: "Botcamp live sessions are designed to allow students to attend from anywhere. Live sessions are held at 2-3pm UTC, a time that enables participants from Europe, Asia, and Americas to join live. All sessions are recorded, transcribed, and posted on the Botcamp platform within 24 hours after each session."
      },
      {
        question: "Do I need coding experience to take Botcamp?",
        answer: "No, you don't... there are separate sessions for tech and non-tech, and you can select which to attend"
      },
      {
        question: "If I get busy, can I defer my enrollment until a future cohort?",
        answer: "We understand that things change. You can defer your enrollment to the next quarterly cohort for free until after second weekly live session. After the second live session, no deferrals are allowed."
      },
      {
        question: "What's the refund and cancellation policy?",
        answer: "It's understandable that plans can change. You can cancel up to 2 weeks before the cohort starts for a full refund. Afterwards, a 20% cancellation fee will apply. No refunds will be granted for cancellations made after the first live session."
      },
      {
        question: "Are group membership discounts available?",
        answer: "Yes, we offer discounts for teams signing up 3 or more seats for Botcamp! Email operations@hummingbot.org and provide information about your team size to learn more."
      },
  
    ]
  
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Common Questions About Cohorts
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