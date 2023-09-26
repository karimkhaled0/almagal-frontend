import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";

export const metadata = {
  title: "المجال - افضل شركات مكافحة الحشرات في الدمام",

  description:
    "شركة مكافحة حشرات في الدمام للقضاء علي جميع انواع الحشرات والقوارض بأقل تكلفة وباستخدام مبيدات أمنة مع شركة رش مبيدات في الدمام , اتصل الان 966508418853",

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google:
      "google-site-verification=V_6f0mZH0h9M2UblASILkDNAlnfFR12FBzhhXCN5dks",
  },

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "مكافحة الحشرات في الدمام",
    image: "https://www.al-magal.com/logo.svg",
    author: {
      "@type": "Person",
      name: "المجال",
    },
    image: {
      "@type": "ImageObject",
      url: "https://www.al-magal.com/logo.svg",
      width: 1200,
      height: 630,
    },
    datePublished: "2021-05-01T00:00:00+03:00",
    dateModified: "2021-05-01T00:00:00+03:00",
    publisher: {
      "@type": "Organization",
      name: "المجال",
      logo: {
        "@type": "ImageObject",
        url: "https://www.al-magal.com/logo.svg",
        width: 1200,
        height: 630,
      },
    },
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

  openGraph: {
    title:
      "مكافحة الحشرات في الدمام - دليل صيانة وخدمات المنزل بالمملكة العربية السعودية افضل شركات مكافحة الحشرات والنظافة العامة",
    description:
      "شركة مكافحة حشرات بالدمام للقضاء علي جميع انواع الحشرات والقوارض باقل تكلفة وباستخدام مبيدات امنة مع شركة رش مبيدات بالدمام بيتك في امان خالي من الحشرات , اتصل الان 966508418853",

    url: "https://www.al-magal.com/dammam-pest-control",
    locale: "ar_SA",
    site_name: "المجال",
    type: "website",
    images: [
      {
        url: "https://www.al-magal.com/logo.svg",
        width: 1200,
        height: 630,
        alt: "مكافحة الحشرات في الدمام",
      },
    ],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "مكافحة الحشرات في الدمام",
  image: "https://www.al-magal.com/logo.svg",
  author: {
    "@type": "Person",
    name: "المجال",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.al-magal.com/logo.svg",
    width: 1200,
    height: 630,
  },
  datePublished: "2021-05-01T00:00:00+03:00",
  dateModified: "2021-05-01T00:00:00+03:00",
  publisher: {
    "@type": "Organization",
    name: "المجال",
    logo: {
      "@type": "ImageObject",
      url: "https://www.al-magal.com/logo.svg",
      width: 1200,
      height: 630,
    },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "شارع الأمير تركي بن عبدالعزيز",
    addressLocality: "الدمام",
    addressRegion: "المنطقة الشرقية",
    postalCode: "12345",
    addressCountry: "SA",
  },
  telephone: "966508418853",
};

export default function BlogLayout({ children }) {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
