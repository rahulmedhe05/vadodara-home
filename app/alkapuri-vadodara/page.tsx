import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

const BASE_URL = "https://vadodarahomes.in";
const PAGE_URL = `${BASE_URL}/alkapuri-vadodara`;

export const metadata: Metadata = {
  title: "Property in Alkapuri Vadodara | Premium Flats, Offices & Showrooms",
  description: "Find luxury property in Alkapuri, Vadodara. Premium 3/4 BHK flats near Sayaji Garden, commercial offices on R.C. Dutt Road. Price: ₹60L-2.5Cr. Vadodara's most prestigious address.",
  keywords: "property in alkapuri vadodara, alkapuri flats, commercial property alkapuri, office space alkapuri, rc dutt road property, sayaji garden property",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Property in Alkapuri Vadodara | Premium Real Estate",
    description: "Find luxury property in Alkapuri, Vadodara. Premium 3/4 BHK flats, commercial offices & retail showrooms. Vadodara's most prestigious address.",
    url: PAGE_URL,
    siteName: "Real Estate Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/alkapuri-vadodara.jpg`,
        width: 1200,
        height: 630,
        alt: "Property in Alkapuri Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property in Alkapuri Vadodara",
    description: "Find luxury property in Alkapuri, Vadodara. Premium flats, offices & showrooms near Sayaji Garden.",
    images: [`${BASE_URL}/images/alkapuri-vadodara.jpg`],
  },
};

// JSON-LD Schema for this page
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "name": "Real Estate Vadodara - Alkapuri",
      "url": PAGE_URL,
      "telephone": "+916353583148",
      "areaServed": {
        "@type": "Place",
        "name": "Alkapuri, Vadodara, Gujarat"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Vadodara", "item": `${BASE_URL}/vadodara` },
        { "@type": "ListItem", "position": 3, "name": "Alkapuri", "item": PAGE_URL }
      ]
    }
  ]
};

export default function AlkapuriVadodaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AreaPageTemplate area="alkapuri" areaName="Alkapuri" />
    </>
  );
}
