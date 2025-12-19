"use client";

import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useLayoutEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
  }, []);

  // Don't render until component is mounted on client to avoid hydration mismatch
  if (!isMounted) {
    return (
      <Button size="icon" className="rounded-full transition-all duration-300 cursor-not-allowed" disabled>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full transition-all duration-300 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
