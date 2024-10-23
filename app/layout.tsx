import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: "PromptLab - AI Prompt Engineering Platform",
    template: "%s | PromptLab",
  },
  description:
    "Create, test, and optimize your AI prompts with PromptLab. The complete platform for prompt engineering.",
  keywords: [
    "AI",
    "Prompt Engineering",
    "LLM",
    "GPT",
    "AI Testing",
    "Prompt Optimization",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://your-website.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}