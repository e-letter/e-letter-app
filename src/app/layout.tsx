import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { Theme } from "@/components/providers/theme-provider";

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
  title: "Hub Unduh E-Letter | Manajemen Surat Izin Sekolah Lengkap",
  description:
    "Unduh E-Letter untuk Web, Desktop, dan Mobile. Sistem manajemen surat izin siswa lengkap dengan pelacakan real-time di semua platform.",
  icons: {
    icon: "/logo-eletter.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
