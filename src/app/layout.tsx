import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roxier.co"),
  title: { default: "ROXIER Co. — Crecimiento Digital Impulsado por IA", template: "%s | ROXIER Co." },
  description: "Agencia digital IA. Diseño web, SEO, Meta Ads, Automatización y Dashboards para empresas que quieren crecer en línea.",
  keywords: ["agencia digital", "diseño web", "SEO", "Meta Ads", "automatización IA", "dashboards", "roxier", "torreón"],
  openGraph: {
    type: "website", locale: "es_MX", url: "https://roxier.co", siteName: "ROXIER Co.",
    title: "ROXIER Co. — Crecimiento Digital Impulsado por IA",
    description: "Tu marca, lista para vender en línea.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROXIER Co. — Crecimiento Digital Impulsado por IA",
    description: "Tu marca, lista para vender en línea.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ROXIER Co.",
            url: "https://roxier.co",
            description: "Agencia digital IA: Diseño web, SEO, Meta Ads, Automatización y Dashboards.",
            foundingDate: "2025",
            address: { "@type": "PostalAddress", addressLocality: "Torreón", addressRegion: "Coahuila", addressCountry: "MX" },
            contactPoint: [{ "@type": "ContactPoint", telephone: "+52-871-512-5207", contactType: "customer service" }],
          })
        }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
