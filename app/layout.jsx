import "../public/globals.css";

export const metadata = {
  title:
    "خدمات المجال - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",

  description:
    "شركة مكافحة حشرات بالدمام والخبر والقطيف والطائف وسيهات وعنك للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google:
      "google-site-verification=V_6f0mZH0h9M2UblASILkDNAlnfFR12FBzhhXCN5dks",
  },

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "خدمات المجال - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    image: "https://al-magal.com/logo.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الأمير تركي بن عبدالعزيز",
      addressLocality: "الدمام",
      addressRegion: "المنطقة الشرقية",
      postalCode: "12345",
      addressCountry: "SA",
    },
    telephone: "966508418853",
  },

  metadataBase: new URL("https://al-magal.com"),

  openGraph: {
    title:
      "خدمات المجال - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    description:
      "شركة مكافحة حشرات بالدمام والخبر والقطيف والطائف وسيهات وعنك للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",

    url: "https://al-magal.com",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary",
    title:
      "خدمات المجال - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    description:
      "شركة مكافحة حشرات بالدمام والخبر والقطيف والطائف وسيهات وعنك للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="font-rubik xl:max-w-5xl lg:max-w-4xl md:max-w-2xl mx-auto md:w-11/12">
        {children}
      </body>
    </html>
  );
}
