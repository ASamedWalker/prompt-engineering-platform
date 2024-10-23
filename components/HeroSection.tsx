// components/sections/hero.tsx
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32">
      {/* Gradient Blob */}
      <div className="absolute inset-0 -z-10 mx-auto max-w-6xl overflow-hidden blur-[100px]">
        <div className="relative aspect-[1200/800] w-full">
          <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-primary/20" />
          <div className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-secondary/20" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Create Better AI Prompts{" "}
          <span className="text-primary">With Confidence</span>
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Build, test, and optimize your AI prompts. Get better results, reduce costs,
          and scale your AI operations with PromptLab.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/signup">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/features">
            Learn More
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
        {[
          { value: "50k+", label: "Prompts Tested" },
          { value: "40%", label: "Average Cost Reduction" },
          { value: "1000+", label: "Happy Users" },
        ].map((stat, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl">{stat.value}</h2>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}