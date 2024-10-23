// components/sections/integrations.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import { Card } from "@/components/ui/card"

const integrations = [
  {
    name: "OpenAI",
    description: "Connect with GPT-4, GPT-3.5, and more",
    logo: "/api/placeholder/48/48", // Replace with actual logos
    comingSoon: false
  },
  {
    name: "Anthropic",
    description: "Integrate with Claude and Claude 2",
    logo: "/api/placeholder/48/48",
    comingSoon: false
  },
  {
    name: "Hugging Face",
    description: "Access thousands of open-source models",
    logo: "/api/placeholder/48/48",
    comingSoon: false
  },
  {
    name: "LangChain",
    description: "Build complex AI applications",
    logo: "/api/placeholder/48/48",
    comingSoon: true
  },
  {
    name: "GitHub",
    description: "Version control for your prompts",
    logo: "/api/placeholder/48/48",
    comingSoon: true
  },
  {
    name: "Slack",
    description: "Collaborate with your team",
    logo: "/api/placeholder/48/48",
    comingSoon: true
  }
]

export function IntegrationsSection() {
  return (
    <section className="container py-24 sm:py-32">
      <FadeIn>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Integrate with your favorite tools
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Connect PromptLab with the tools you already use
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto grid max-w-screen-lg gap-4 py-12 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Card className="group relative overflow-hidden p-6 hover:shadow-lg transition-shadow">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full flex items-center gap-4"
                />
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    {integration.name}
                    {integration.comingSoon && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              <motion.div
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}