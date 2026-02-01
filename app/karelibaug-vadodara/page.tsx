import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Karelibaug Vadodara | Traditional Gujarati Homes | Prime Location 2025",
  description: "Buy property in Karelibaug Vadodara - Vadodara's most traditional neighborhood. 2/3/4 BHK flats, row houses & bungalows. Gujarati culture, central location. From ₹35L. Best deals!",
  keywords: [
    "property in karelibaug vadodara",
    "flats in karelibaug",
    "karelibaug property rates",
    "traditional homes vadodara",
    "gujarati locality vadodara",
    "karelibaug vadodara pin code",
    "bungalow in karelibaug",
    "row house karelibaug",
    "central vadodara property",
    "old vadodara homes",
    "karelibaug real estate",
    "family property karelibaug"
  ],
  openGraph: {
    title: "Property in Karelibaug Vadodara | Heart of Traditional Vadodara",
    description: "Premium properties in Karelibaug - Vadodara's cultural heartland. Traditional Gujarati neighborhood with modern amenities.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/karelibaug-vadodara",
  },
};

export default function KarelibaugPage() {
  return <AreaPageTemplate area="karelibaug" areaName="Karelibaug" />;
}
