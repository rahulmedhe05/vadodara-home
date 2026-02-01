import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Sama Vadodara | Heritage Living Near Laxmi Vilas Palace | Premium Real Estate 2025",
  description: "Buy property in Sama Vadodara - heritage neighborhood near Laxmi Vilas Palace. 2/3/4 BHK flats, bungalows & heritage homes. Royal lifestyle, cultural hub. Prices from ₹45L. Expert guidance!",
  keywords: [
    "property in sama vadodara",
    "flats in sama",
    "sama savli road property",
    "property near laxmi vilas palace",
    "heritage property vadodara",
    "sama vadodara pin code",
    "bungalow in sama",
    "sama property rates",
    "cultural hub vadodara property",
    "old vadodara property",
    "sama real estate",
    "residential property sama",
    "family homes sama vadodara"
  ],
  openGraph: {
    title: "Property in Sama Vadodara | Heritage Living Experience",
    description: "Premium properties in Sama - Vadodara's cultural heart near Laxmi Vilas Palace. Heritage bungalows, modern apartments & family homes.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/sama-vadodara",
  },
};

export default function SamaPage() {
  return <AreaPageTemplate area="sama" areaName="Sama" />;
}
