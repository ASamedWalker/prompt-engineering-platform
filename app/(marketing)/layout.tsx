// app/(marketing)/layout.tsx
import { SiteHeader } from "@/components/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      {children}
    </div>
  )
}