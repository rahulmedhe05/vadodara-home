import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Gotri Vadodara | Flats, Plots & Villas Near IT Hub | Best Real Estate Deals 2025",
  description: "Find premium property in Gotri Vadodara near IT parks & Sevasi. 2/3/4 BHK flats, independent houses, plots & commercial spaces. RERA approved projects with modern amenities. Price starts ₹28L. Book site visit!",
  keywords: [
    "property in gotri vadodara",
    "flats in gotri",
    "2 bhk flat in gotri vadodara",
    "3 bhk flat in gotri",
    "plots in gotri vadodara",
    "villa in gotri",
    "gotri property rates",
    "gotri real estate",
    "property near sevasi",
    "flats near gotri IT park",
    "residential property gotri",
    "new projects in gotri vadodara",
    "affordable flats gotri",
    "gotri vadodara pin code",
    "property dealer in gotri"
  ],
  openGraph: {
    title: "Property in Gotri Vadodara | IT Hub & Modern Living Destination",
    description: "Discover premium properties in Gotri - Vadodara's fastest-growing IT corridor. New residential projects, plots & commercial spaces near Sevasi & IT parks.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property in Gotri Vadodara | IT Hub Living",
    description: "Premium flats, villas & plots in Gotri near IT parks. Modern amenities, great connectivity. Starting ₹28L.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/gotri-vadodara",
  },
};

export default function GotriPage() {
  return <AreaPageTemplate area="gotri" areaName="Gotri" />;
}
