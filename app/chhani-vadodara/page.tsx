import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Chhani Vadodara | Affordable Plots & Flats | Emerging Investment 2025",
  description: "Buy affordable property in Chhani Vadodara - plots from ₹1800/sq.ft, flats from ₹22L. Emerging suburb with highway connectivity, industrial growth. Early investor's paradise. RERA approved!",
  keywords: [
    "property in chhani vadodara",
    "plots in chhani",
    "affordable flats chhani vadodara",
    "chhani vadodara property rates",
    "chhani jakat naka property",
    "chhani road vadodara",
    "residential plots chhani",
    "new projects chhani vadodara",
    "chhani vadodara pin code",
    "cheap property vadodara",
    "chhani real estate",
    "farmhouse chhani vadodara"
  ],
  openGraph: {
    title: "Property in Chhani Vadodara | Affordable Emerging Suburb",
    description: "Discover Chhani - Vadodara's most affordable investment destination. Plots, flats & farmhouses with 20%+ appreciation potential.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/chhani-vadodara",
  },
};

export default function ChhaniPage() {
  return <AreaPageTemplate area="chhani" areaName="Chhani" />;
}
