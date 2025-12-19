"use client";

import { motion } from "framer-motion";
import { ModeToggle } from "@/components/common/mode-toggle";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

export function Navbar() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const isDark = !mounted ? true : theme !== "light";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 md:px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 md:top-6 ${
        isDark
          ? "bg-slate-950/40 border-white/10 hover:bg-slate-950/60"
          : "bg-white/40 border-slate-900/10 hover:bg-white/60"
      }`}
    >
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-quicksand font-bold text-lg md:text-xl bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent whitespace-nowrap"
        >
          E-Letter
        </motion.div>

        <div className={`hidden md:block w-px h-6 ${isDark ? "bg-white/10" : "bg-slate-900/10"}`} />

        <ModeToggle />
      </div>
    </motion.nav>
  );
}
