import "../public/globals.css";

export const metadata = {
  title: "المجال مكافحة الحشرات - خدمات مكافحة الحشرات في السعودية",
  description:
    "شركة المجال لمكافحة الحشرات: خبراء في مكافحة الصراصير، النمل، الفئران والمزيد. نقدم خدمات مكافحة الحشرات عالية الجودة لحماية بيئتك وصحتك. اتصل بنا اليوم لحلول مكافحة الحشرات الفعّالة والآمنة. اتصل الآن: 00966549834554، 00966508418853. #مكافحة_الحشرات #حماية_بيئتك",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.almajal-ksa.com/",
  },
  verification: {
    google: "google-site-verification=3123123221",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className="font-cairo max-7xl mx-auto w-9/12">{children}</body>
    </html>
  );
}
