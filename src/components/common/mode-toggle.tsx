"use client";

import { useTheme } from "next-themes";
import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Button size="icon" className="rounded-full transition-all duration-300 cursor-not-allowed" disabled>
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
        <span className="sr-only">Ubah tema</span>
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
      <span className="sr-only">Ubah tema</span>
    </Button>
  );
}
