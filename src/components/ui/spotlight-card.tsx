"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor: string;
  borderGradient?: string;
}

export function SpotlightCard({ children, className, spotlightColor, borderGradient }: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        window.matchMedia("(hover: none)").matches || window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isTouchDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("spotlight-card relative overflow-hidden rounded-2xl backdrop-blur-2xl h-full", className)}
      whileHover={!isMobile ? { scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          background: borderGradient || "transparent",
          opacity: isMobile ? 0.3 : isHovering ? 0.6 : 0.15,
          padding: "1px",
        }}
      />

      {!isMobile && isHovering && (
        <motion.div
          className="spotlight-glow absolute pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 65%)`,
            filter: "blur(50px)",
            opacity: 0.5,
            mixBlendMode: "screen",
          }}
          animate={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}

      {isMobile && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none"
          style={{
            background: borderGradient || "transparent",
            opacity: 0.6,
          }}
        />
      )}

      <div className="spotlight-card-inner relative z-10">{children}</div>
    </motion.div>
  );
}
