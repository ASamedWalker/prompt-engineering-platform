// components/sections/cta.tsx
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export function CTASection() {
  return (
    <section className="border-t py-24">
      <FadeIn>
        <div className="container px-4">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-background to-muted px-6 py-20 md:px-12 md:py-28">
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
            </motion.div>

            <div className="relative">
              <div className="flex flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                  Ready to transform your AI workflow?
                </h2>
                <p className="max-w-2xl text-muted-foreground md:text-xl">
                  Join thousands of developers and businesses using PromptLab to create better AI experiences.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/signup">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}