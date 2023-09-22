import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";

export const metadata = {
  title:
    "مكافحة الحشرات في الدمام - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",

  description:
    "شركة مكافحة حشرات بالدمام للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",

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

  alternates: {
    canonical: `https://al-magal.com/dammam-pest-control`,
  },

  openGraph: {
    title:
      "مكافحة الحشرات في الدمام - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    description:
      "شركة مكافحة حشرات بالدمام للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",

    url: "https://al-magal.com/dammam-pest-control",
    locale: "ar_SA",
  },

  twitter: {
    card: "summary",
    title:
      "خدمات المجال - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    description:
      "شركة مكافحة حشرات بالدمام للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",
  },

  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
};

export default function BlogLayout({ children }) {
  return (
    <main>
      <Nav />
      <section id="home">
        <Hero />
      </section>
      {children}

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
