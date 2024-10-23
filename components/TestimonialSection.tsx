// components/sections/testimonials.tsx
"use client"

import { FadeIn } from "@/components/ui/fade-in"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "PromptLab has transformed how we interact with AI. Our response quality improved by 40% while reducing costs.",
    author: "Sarah Chen",
    title: "AI Lead at TechCorp",
    image: "/api/placeholder/32/32"
  },
  {
    quote: "The testing and analytics features are game-changing. We can now optimize our prompts with confidence.",
    author: "Michael Ross",
    title: "Product Manager at AI Solutions",
    image: "/api/placeholder/32/32"
  },
  {
    quote: "Finally, a tool that makes prompt engineering accessible and efficient. Couldn't recommend it more.",
    author: "Emma Thompson",
    title: "CTO at DataFlow",
    image: "/api/placeholder/32/32"
  },
]

export function TestimonialSection() {
  return (
    <section className="container py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Trusted by industry leaders
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            See what our users are saying about PromptLab
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3 mt-16">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <Card className="relative overflow-hidden">
              <CardContent className="mt-6">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-muted-foreground/20" />
                <div className="space-y-4">
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full flex items-center space-x-4"
                    />

                    <div>
                      <h3 className="font-semibold">{testimonial.author}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}