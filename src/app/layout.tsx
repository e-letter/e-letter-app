import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";
import { Theme } from "@/components/providers/theme-provider";
import { jsonLdSchema, organizationSchema } from "@/lib/schema";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://e-letter-app.vercel.app"),
  title: {
    default: "E-Letter | Platform Manajemen Surat Izin Sekolah Digital",
    template: "%s | E-Letter",
  },
  description:
    "Sistem manajemen surat izin siswa digital lengkap. Download E-Letter Web, Desktop, atau Mobile dengan pelacakan real-time dan dashboard admin terintegrasi.",
  keywords: [
    "surat izin siswa",
    "manajemen izin sekolah",
    "sistem izin digital",
    "aplikasi sekolah",
    "platform manajemen siswa",
    "dashboard admin sekolah",
    "izin real-time",
  ],
  authors: [{ name: "E-Letter Team" }],
  creator: "E-Letter",
  publisher: "E-Letter",
  icons: {
    icon: "/logo-eletter.webp",
    apple: "/logo-eletter.webp",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://e-letter-app.vercel.app",
    siteName: "E-Letter",
    title: "E-Letter | Platform Manajemen Surat Izin Sekolah Digital",
    description:
      "Sistem manajemen surat izin siswa digital dengan pelacakan real-time, tersedia di Web, Desktop, dan Mobile.",
    images: [
      {
        url: "/logo-eletter.webp",
        width: 480,
        height: 480,
        alt: "E-Letter - Platform Manajemen Surat Izin Sekolah",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Letter | Platform Manajemen Surat Izin Sekolah Digital",
    description:
      "Sistem manajemen surat izin siswa digital dengan pelacakan real-time, tersedia di Web, Desktop, dan Mobile.",
    images: ["/logo-eletter.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://e-letter-app.vercel.app",
    languages: {
      id: "https://e-letter-app.vercel.app",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020617" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${quicksand.variable} ${nunito.variable} antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
