// components/sections/faq.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const faqs = [
  {
    question: "What is prompt engineering?",
    answer: "Prompt engineering is the practice of designing and optimizing inputs to AI models to get more accurate, relevant, and useful outputs. It's a crucial skill for effectively working with AI models like GPT-4 and Claude."
  },
  {
    question: "How does PromptLab help with prompt engineering?",
    answer: "PromptLab provides tools for creating, testing, and optimizing prompts. You can test prompts across different models, track performance metrics, and iterate based on data-driven insights."
  },
  {
    question: "Can I use PromptLab with my existing AI tools?",
    answer: "Yes! PromptLab integrates with popular AI models and platforms. You can use it with OpenAI's GPT models, Anthropic's Claude, and many other AI services."
  },
  {
    question: "Is there a free plan available?",
    answer: "Yes, we offer a free tier that includes basic features like prompt testing and basic analytics. You can upgrade to access more advanced features as your needs grow."
  },
  {
    question: "How secure is my data with PromptLab?",
    answer: "We take security seriously. Your data is encrypted at rest and in transit, and we provide enterprise-grade security features for business accounts."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="container py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to know about PromptLab
          </p>
        </div>

        <div className="mx-auto max-w-3xl mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: openIndex === index ? "var(--accent)" : "transparent" }}
              className="rounded-lg border p-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}