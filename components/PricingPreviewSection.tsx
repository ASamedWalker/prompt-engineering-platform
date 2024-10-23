// components/sections/pricing-preview.tsx
"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/fade-in"

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    price: "$0",
    features: [
      "100 prompt tests/month",
      "Basic analytics",
      "Community support",
      "1 team member",
    ],
  },
  {
    name: "Pro",
    description: "For professional developers and teams",
    price: "$49",
    features: [
      "Unlimited prompt tests",
      "Advanced analytics",
      "Priority support",
      "Up to 5 team members",
      "Version control",
      "Custom templates",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "24/7 support",
      "Custom integrations",
      "SLA guarantees",
      "Dedicated account manager",
    ],
  },
]

export function PricingPreviewSection() {
  return (
    <section className="container py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <div className="mx-auto grid max-w-screen-lg gap-4 py-12 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <p className="pt-4 text-4xl font-bold">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}