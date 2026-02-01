import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
})

// Separate viewport export for Next.js 14+
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
}

export const metadata: Metadata = {
  title: "Vadodara Homes | Real Estate Property Flats Houses in Vadodara",
  description:
    "Find your dream home in Vadodara. Flats, houses, villas, commercial properties for sale & rent. 60+ localities covered. Trusted real estate agents. Call now for free consultation.",
  keywords:
    "real estate vadodara, property vadodara, flats for sale vadodara, houses vadodara, villas vadodara, commercial property vadodara, buy property vadodara",
  authors: [{ name: "Vadodara Homes" }],
  creator: "Vadodara Homes",
  publisher: "Vadodara Homes",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://vadodarahomes.in"),
  alternates: {
    canonical: "https://vadodarahomes.in",
  },
  openGraph: {
    title: "Vadodara Homes | Real Estate & Property in Vadodara",
    description:
      "Find your dream home in Vadodara. Flats, houses, villas & commercial properties. 60+ localities. Trusted agents.",
    url: "https://vadodarahomes.in",
    siteName: "Vadodara Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vadodarahomes.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vadodara Homes - Real Estate Property",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadodara Homes | Real Estate in Vadodara",
    description: "Find flats, houses, villas & commercial properties in Vadodara. 60+ localities covered.",
    images: ["https://vadodarahomes.in/og-image.jpg"],
    creator: "@vadodarahomes",
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
    // Add other verifications as needed
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
  category: "real estate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://vadodarahomes.in/#organization",
        name: "Vadodara Homes",
        image: "https://vadodarahomes.in/logo.png",
        description: "Find your dream home in Vadodara. Flats, houses, villas & commercial properties for sale and rent across 60+ localities.",
        url: "https://vadodarahomes.in",
        telephone: "+916353583148",
        email: "info@vadodarahomes.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Race Course Road",
          addressLocality: "Vadodara",
          addressRegion: "Gujarat",
          postalCode: "390007",
          addressCountry: "IN",
        },
        sameAs: [],
        priceRange: "₹₹-₹₹₹₹",
        serviceArea: {
          "@type": "City",
          name: "Vadodara",
        },
        areaServed: ["Vadodara", "Alkapuri", "Race Course", "Manjalpur", "Gotri", "Vasna", "Karelibaug", "Fatehgunj", "Sayajigunj", "Akota", "Harni", "Tandalja", "Subhanpura", "Makarpura", "Nizampura"],
      },
      {
        "@type": "Organization",
        "@id": "https://vadodarahomes.in/#organization",
        name: "Vadodara Homes",
        url: "https://vadodarahomes.in",
        logo: "https://vadodarahomes.in/logo.png",
        foundingDate: "2010",
        knowsAbout: [
          "Real Estate",
          "Property Consulting",
          "Flats for Sale",
          "Commercial Property",
          "Residential Property",
          "Property Investment",
        ],
      },
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
