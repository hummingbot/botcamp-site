import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function CohortFAQ() {
    const faqs = [
      {
        question: "How many live sessions are there in a Botcamp cohort?",
        answer: "During a 4 week cohort, students get access to 12+ online live sessions (60 minutes), along with the final Demo Day live session (90-120 minutes). All sessions are recorded, transcribed, and posted on the Botcamp platform within 24 hours after each session."
      },
      {
        question: "What's the expected time commitment for a Botcamp cohort?",
        answer: "Botcamp is designed to be flexible and accommodate different schedules. The exact time commitment can vary, but on average, students who earn certification have spent 5-10 hours per week on Botcamp during the 6-week cohort."
      },
      {
        question: "What happens if I can't make a live session?",
        answer: "Botcamp live sessions are designed to allow students to attend from anywhere. Live sessions are held at 2-3pm UTC, a time that enables participants from Europe, Asia, and Americas to join live. All sessions are recorded, transcribed, and posted on the Botcamp platform within 24 hours after each session."
      },
      {
        question: "Do I need coding experience to take Botcamp?",
        answer: "No, there are separate tracks for technical and non-technical participants, and you can select which sessions to attend and which certification track to earn."
      },
      {
        question: "If I get busy, can I defer my enrollment until a future cohort?",
        answer: "We understand that things change. You can defer your enrollment to the next quarterly cohort for free until after the first week. After the first week, no deferrals are allowed."
      },
      {
        question: "What's the refund and cancellation policy?",
        answer: "You can cancel up to 2 weeks before the cohort starts for a full refund. Afterwards, a 20% cancellation fee will apply. No refunds will be granted for cancellations made after the first live session."
      },
      {
        question: "Are group membership discounts available?",
        answer: "Yes, we offer substantial discounts for teams signing up 3 or more seats for a Botcamp cohort! Email operations@botcamp.xyz and provide information about your team size to learn more."
      },
      {
        question: "How long do I have access to Botcamp content?",
        answer: "You have lifetime access to the Botcamp platform, including recordings of live sessions and office hours, and access to private Discord channels for support."
      },
      {
        question: "What have past Botcamp students done afterwards?",
        answer: "Past Botcamp graduates have gone on to land trading jobs at crypto market making firms, run market making bots for their own tokens, build consistently profitable trading strategies, partner with other Botcamp members on projects, and become mentors in future Botcamp cohorts."
      },
      {
        question: "What do I need to do to earn my Hummingbot certification?",
        answer: "To earn your Hummingbot certification, you need to complete the requirements of either the Market Maker or the Strategy Developer certification track, and present your own trading strategy during the Demo Day final live session."
      },
      {
        question: "Does buying a cohort seat include access to Botcamp courses?",
        answer: "Yes, your Botcamp cohort purchase includes access to 4 introductory courses on algo trading strategies and market making strategies - a $800 value - as well as a private Discord channels for support."
      },
      {
        question: "Can I pay in crypto?",
        answer: "Yes, you can pay in crypto for Botcamp cohorts. Chat in Telegram with us to learn more."
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
