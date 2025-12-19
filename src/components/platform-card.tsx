"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

interface PlatformCardProps {
  icon: LucideIcon;
  title: string;
  tagline: string;
  techBadge: string;
  buttonText: string;
  repoUrl: string;
  gradientFrom: string;
  gradientTo: string;
  delay?: number;
}

export function PlatformCard({
  icon: Icon,
  title,
  tagline,
  techBadge,
  buttonText,
  repoUrl,
  gradientFrom,
  gradientTo,
  delay = 0,
}: PlatformCardProps) {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card
        className={`glass-card h-full flex flex-col relative overflow-hidden group transition-all duration-300 ${
          isDark
            ? "hover:shadow-2xl hover:shadow-white/10 dark:hover:shadow-white/10"
            : "hover:shadow-lg hover:shadow-slate-900/10"
        }`}
        suppressHydrationWarning
      >
        {/* Gradient accent on hover - light mode: border accent, dark mode: overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
            isDark ? "block" : "hidden"
          }`}
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
          suppressHydrationWarning
        />

        <CardHeader className="relative z-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <CardTitle
            className={`text-2xl font-quicksand font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            suppressHydrationWarning
          >
            {title}
          </CardTitle>
          <CardDescription
            className={`text-base mt-2 ${isDark ? "text-zinc-400" : "text-slate-600"}`}
            suppressHydrationWarning
          >
            {tagline}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between relative z-10">
          <div className="mb-6">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
              }}
            >
              {techBadge}
            </div>
          </div>

          <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              className={`w-full font-semibold text-base transition-all duration-300 cursor-pointer hover:opacity-90 ${
                isDark ? "text-black" : "text-white"
              }`}
              style={{
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
              }}
              suppressHydrationWarning
            >
              {buttonText}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
