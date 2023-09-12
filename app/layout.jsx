import "../public/globals.css";

export const metadata = {
  title: "مكافحة الحشرات - المجال للقضاء على الحشرات في السعودية",

  description: `مكافحة الحشرات في الدمام و الخبر و القطيف و الظهران و عنك و سيهات . شركة المجال لمكافحة الحشرات توفر أفضل الحلول في المنطقة الشرقية. اتصل الآن على 966549834554. الجودة والأمان تحت سقف واحد.`,

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  sitemap: {
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  },

  verification: {
    google:
      "google-site-verification=V_6f0mZH0h9M2UblASILkDNAlnfFR12FBzhhXCN5dks",
  },

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "المجال لمكافحة الحشرات",
    image: "https://www.al-magal.com/logo.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الأمير تركي بن عبدالعزيز",
      addressLocality: "الدمام",
      addressRegion: "المنطقة الشرقية",
      postalCode: "12345",
      addressCountry: "SA",
    },
    telephone: "966549834554",
  },

  canonical: "https://www.al-magal.com",

  openGraph: {
    title:
      "المجال لمكافحة الحشرات - الحلول الأمثل للقضاء على الحشرات في السعودية",
    description:
      "شركة المجال لمكافحة الحشرات توفر أفضل الحلول والخدمات للقضاء التام على جميع أنواع الحشرات. اتصل الآن على 966549834554 للحصول على خدمة مميزة بأسعار مناسبة. الجودة والأمان تحت سقف واحد.",

    url: "https://www.al-magal.com",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary",
    title:
      "المجال لمكافحة الحشرات - الحلول الأمثل للقضاء على الحشرات في السعودية",
    description:
      "شركة المجال لمكافحة الحشرات توفر أفضل الحلول والخدمات للقضاء التام على جميع أنواع الحشرات. اتصل الآن على 966549834554 للحصول على خدمة مميزة بأسعار مناسبة. الجودة والأمان تحت سقف واحد.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="font-cairo xl:max-w-5xl lg:max-w-4xl md:max-w-2xl mx-auto md:w-11/12">
        {children}
      </body>
    </html>
  );
}
