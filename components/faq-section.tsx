"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "On average, branding projects take 4-6 weeks, while web design and development projects can range from 8-12 weeks. We provide a detailed timeline and keep you informed throughout the project."
    },
    {
      question: "What is the cost of working with you?",
      answer: "Our pricing varies based on project scope, complexity, and requirements. We offer customized solutions to fit different budgets while maintaining high-quality standards. Contact us for a detailed quote."
    },
    {
      question: "How involved will I be in the process?",
      answer: "We believe in collaborative partnerships. You'll be involved at key decision points, from initial planning to final implementation. We maintain regular communication and welcome your feedback throughout the project."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "We're experienced in working with established brands. We can adapt our solutions to align with your existing brand guidelines while bringing fresh perspectives and improvements where needed."
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Your questions, answered
        </h2>
        <p className="text-xl text-muted-foreground">
          Curious about our services? Find answers to your questions here.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border-none shadow-sm bg-slate-50 px-6"
            >
              <AccordionTrigger className="text-base font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

