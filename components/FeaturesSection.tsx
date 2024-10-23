// components/sections/features.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Wand2,
  LineChart,
  History,
  Share2,
  Shield,
  Zap
} from "lucide-react"

const features = [
  {
    title: "Smart Testing",
    description: "Test your prompts across multiple AI models and compare results instantly.",
    icon: Wand2,
  },
  {
    title: "Analytics",
    description: "Track performance, costs, and optimize your prompt effectiveness.",
    icon: LineChart,
  },
  {
    title: "Version Control",
    description: "Keep track of changes and iterate with confidence.",
    icon: History,
  },
  {
    title: "Collaboration",
    description: "Share prompts and insights with your team members.",
    icon: Share2,
  },
  {
    title: "Enterprise Security",
    description: "Enterprise-grade security for your prompts and data.",
    icon: Shield,
  },
  {
    title: "API Integration",
    description: "Easily integrate with your existing workflows.",
    icon: Zap,
  },
]

export function FeaturesSection() {
  return (
    <section className="container py-24" id="features">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Everything you need to master prompt engineering
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Powerful features to help you create, test, and optimize your AI prompts
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-16">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col justify-between">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}