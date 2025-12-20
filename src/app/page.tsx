"use client";

import dynamic from "next/dynamic";
import { PlatformCard } from "@/components/sections/platform-card";
import { Navbar } from "@/components/layout/navbar";
import { Globe, Monitor, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

const BackgroundBeams = dynamic(
  () => import("@/components/ui/background-beams").then((mod) => ({ default: mod.BackgroundBeams })),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Home() {
  const { theme } = useTheme();
  const mounted = useMounted();
  const isDark = !mounted ? true : theme !== "light";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-dvh bg-background relative overflow-hidden transition-colors duration-300">
      <BackgroundBeams className="fixed inset-0 z-0 will-change-transform" />

      <Navbar />

      <main className="relative z-10 pt-28 md:pt-32 min-h-[calc(100vh-7rem)]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <motion.div
              className="mb-4 md:mb-6 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md border transition-all ${
                  isDark
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-slate-900/10 border-slate-900/20 text-slate-900"
                }`}
              >
                📚 Sekilas Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-quicksand font-bold mb-4 md:mb-6 tracking-tighter leading-tight"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <span className="gradient-text from-purple-500 via-pink-500 to-orange-500">
                Kelola Perizinan Sekolah.
              </span>
              <br />
              <span className={isDark ? "text-white" : "text-slate-900"}>Di Mana Saja.</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl font-nunito max-w-3xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className={isDark ? "text-zinc-300" : "text-slate-600"}>
                Ekosistem digital lengkap untuk sekolah modern. Unduh platform web, aplikasi desktop, atau aplikasi
                mobile untuk mengelola surat izin siswa secara seamless di semua perangkat.
              </span>
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 auto-rows-fr"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <PlatformCard
                icon={Globe}
                title="E-Letter Web"
                tagline="Pantau Real-time & Panel Admin Pusat"
                techBadge="Next.js 16 + Tailwind"
                buttonText="Buka Repositori Web"
                repoUrl="https://github.com/e-letter/e-letter-web"
                gradientFrom="#C471ED"
                gradientTo="#F64F59"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <PlatformCard
                icon={Monitor}
                title="E-Letter Desktop"
                tagline="Performa Native & Akses Stabil"
                techBadge=".NET 4.7.2 + WPF"
                buttonText="Unduh Aplikasi Desktop"
                repoUrl="https://github.com/e-letter/e-letter-desktop"
                gradientFrom="#2193b0"
                gradientTo="#6dd5ed"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1">
              <PlatformCard
                icon={Smartphone}
                title="E-Letter Mobile"
                tagline="Notifikasi Instan & Akses Biometrik"
                techBadge="Android Java + Material 3"
                buttonText="Dapatkan Aplikasi Android"
                repoUrl="https://github.com/e-letter/e-letter-android"
                gradientFrom="#FDC830"
                gradientTo="#F37335"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20 mt-20 py-10 auto-rows-max"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "🌐 Sinkronisasi Cloud",
                description: "Sinkronisasi data real-time di seluruh perangkat",
              },
              {
                title: "🔐 Keamanan Terjamin",
                description: "Enkripsi tingkat enterprise untuk data siswa",
              },
              {
                title: "⚡ Performa Cepat",
                description: "Dioptimalkan untuk kecepatan dan latensi rendah",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`glass p-4 md:p-6 rounded-xl text-center ${
                  isDark ? "bg-white/5 border-white/10" : "bg-slate-900/5 border-slate-900/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h2 className="text-base md:text-lg font-quicksand font-bold mb-2">{feature.title}</h2>
                <p className={`text-xs md:text-sm ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`text-center font-nunito pb-8 md:pb-12 ${isDark ? "text-zinc-400" : "text-slate-500"}`}
          >
            <p className="mb-3 md:mb-4 text-xs md:text-sm">
              © {new Date().getFullYear()} Sistem Manajemen E-Letter. Hak cipta dilindungi undang-undang.
            </p>
            <a
              href="https://github.com/e-letter"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs md:text-sm transition-colors duration-300 underline underline-offset-4 ${
                isDark
                  ? "text-zinc-300 hover:text-white decoration-zinc-500"
                  : "text-slate-600 hover:text-slate-900 decoration-slate-400"
              }`}
            >
              Kunjungi Organisasi GitHub Kami
            </a>
          </motion.footer>
        </div>
      </main>
    </div>
  );
}
