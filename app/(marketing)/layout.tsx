// app/(marketing)/layout.tsx
import { SiteHeader } from "@/components/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="relative h-full w-full">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-grid-slate-800/20" />

          {/* Top gradient */}
          <div className="absolute top-0 h-[500px] w-full bg-gradient-to-b from-primary/5 to-transparent" />

          {/* Side gradients */}
          <div className="absolute left-0 h-full w-[500px] bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute right-0 h-full w-[500px] bg-gradient-to-l from-primary/5 to-transparent" />
        </div>
      </div>

      <SiteHeader />
      {children}
    </div>
  )
}