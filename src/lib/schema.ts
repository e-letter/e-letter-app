export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "E-Letter",
  alternateName: "Platform Manajemen Surat Izin Sekolah",
  description:
    "Sistem manajemen surat izin siswa digital lengkap dengan pelacakan real-time. Tersedia di Web, Desktop, dan Mobile.",
  url: "https://e-letter-app.vercel.app",
  image: "https://e-letter-app.vercel.app/logo-eletter.webp",
  logo: "https://e-letter-app.vercel.app/logo-eletter.webp",
  sameAs: ["https://github.com/e-letter"],
  applicationCategory: "EducationalApplication",
  inLanguage: "id-ID",
  isAccessibleForFree: true,
  operatingSystem: ["Windows", "macOS", "Linux", "Android", "iOS"],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "IDR",
    price: "0",
    offerType: "Free",
    availability: "https://schema.org/InStock",
  },
  potentialAction: {
    "@type": "UseAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://e-letter-app.vercel.app",
      actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform", "DesktopApplication", "MobileApplication"],
    },
  },
  author: {
    "@type": "Organization",
    name: "E-Letter Team",
  },
  creator: {
    "@type": "Organization",
    name: "E-Letter Team",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "E-Letter",
  alternateName: "Platform Manajemen Surat Izin Sekolah",
  url: "https://e-letter-app.vercel.app",
  logo: "https://e-letter-app.vercel.app/logo-eletter.webp",
  description: "Sistem manajemen surat izin siswa digital dengan pelacakan real-time dan dashboard admin terintegrasi.",
  sameAs: ["https://github.com/e-letter"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["id", "en"],
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://e-letter-app.vercel.app",
    },
  ],
};
