export const seoConfig = {
  siteName: "E-Letter",
  siteUrl: "https://e-letter-app.vercel.app",
  description:
    "Sistem manajemen surat izin siswa digital lengkap dengan pelacakan real-time dan dashboard admin terintegrasi.",
  keywords: [
    "surat izin siswa",
    "manajemen izin sekolah",
    "sistem izin digital",
    "aplikasi sekolah",
    "platform manajemen siswa",
    "dashboard admin sekolah",
    "izin real-time",
    "manajemen perpustakaan sekolah",
    "aplikasi berbasis web",
  ],
  twitter: "@e-letter",
  locale: "id_ID",
};

export function generateMetadataTitle(pageTitle?: string): string {
  if (pageTitle) {
    return `${pageTitle} | ${seoConfig.siteName}`;
  }
  return `${seoConfig.siteName} | Platform Manajemen Surat Izin Sekolah Digital`;
}

export function generateOpenGraphImage(title: string): string {
  const encodedTitle = encodeURIComponent(title);
  return `https://og-image.vercel.app/${encodedTitle}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths=300&heights=300`;
}

export const socialMediaUrls = {
  github: "https://github.com/e-letter",
  twitter: "https://twitter.com/e-letter",
  linkedin: "https://linkedin.com/company/e-letter",
  email: "contact@e-letter.app",
};

export const navigationLinks = [
  {
    name: "Beranda",
    href: "/",
    ariaLabel: "Kembali ke halaman beranda",
  },
  {
    name: "GitHub",
    href: socialMediaUrls.github,
    ariaLabel: "Buka organisasi E-Letter di GitHub",
    external: true,
  },
];

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateStructuredData(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  };
}
