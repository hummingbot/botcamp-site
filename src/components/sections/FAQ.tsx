import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
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
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
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
  )
}

