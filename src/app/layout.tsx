import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { Theme } from "@/components/theme-provider";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "E-Letter Download Hub | Complete School Permission Letter Management",
  description:
    "Download E-Letter for Web, Desktop, and Mobile. Complete school permission letter management system with real-time tracking across all platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
