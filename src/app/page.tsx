"use client";

import { PlatformCard } from "@/components/platform-card";
import { ModeToggle } from "@/components/mode-toggle";
import { Globe, Monitor, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen bg-background relative overflow-hidden transition-colors duration-300 ${isDark ? "dark" : ""}`} suppressHydrationWarning>
      {/* Animated gradient orbs background */}
      <div className="gradient-orb-purple w-96 h-96 top-20 -left-48" />
      <div className="gradient-orb-orange w-96 h-96 bottom-20 -right-48" />
      <div className="gradient-orb-blue w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-opacity-20 glass backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-quicksand font-bold text-2xl text-foreground"
          >
            E-Letter
          </motion.div>
          <ModeToggle />
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h1
            className="text-5xl md:text-7xl font-quicksand font-bold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            E-Letter Management System
          </motion.h1>
          <motion.p
            className={`text-xl md:text-2xl font-nunito max-w-3xl mx-auto ${
              isDark ? "text-zinc-300" : "text-slate-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            suppressHydrationWarning
          >
            Complete school permission letter management across Web, Desktop, and Mobile.
          </motion.p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <PlatformCard
            icon={Globe}
            title="E-Letter Web"
            tagline="Real-time tracking & Admin Panel"
            techBadge="Next.js 16 + Tailwind"
            buttonText="Open Web Repo"
            repoUrl="https://github.com/e-letter/e-letter-web"
            gradientFrom="#C471ED"
            gradientTo="#F64F59"
            delay={0.2}
          />

          <PlatformCard
            icon={Monitor}
            title="E-Letter Desktop"
            tagline="Offline support & Native Performance"
            techBadge=".NET 4.7.2 + WPF"
            buttonText="Download Desktop"
            repoUrl="https://github.com/e-letter/e-letter-desktop"
            gradientFrom="#2193b0"
            gradientTo="#6dd5ed"
            delay={0.4}
          />

          <PlatformCard
            icon={Smartphone}
            title="E-Letter Mobile"
            tagline="On-the-go notifications & Biometrics"
            techBadge="Android Java + Material 3"
            buttonText="Get Android App"
            repoUrl="https://github.com/e-letter/e-letter-android"
            gradientFrom="#FDC830"
            gradientTo="#F37335"
            delay={0.6}
          />
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`text-center font-nunito ${isDark ? "text-zinc-500" : "text-slate-500"}`}
          suppressHydrationWarning
        >
          <p className="mb-2">© {new Date().getFullYear()} E-Letter Management System. All rights reserved.</p>
          <a
            href="https://github.com/e-letter"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 underline underline-offset-4 ${
              isDark
                ? "text-zinc-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }`}
            suppressHydrationWarning
          >
            Visit our GitHub Organization
          </a>
        </motion.footer>
      </main>
    </div>
  );
}
