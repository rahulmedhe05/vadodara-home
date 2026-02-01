import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

// Real Estate business - Main Homepage
const business = getBusinessBySlug("real-estate")!;
const content = getBusinessContent("real-estate", "vadodara");

export const metadata: Metadata = {
  title: "Best Real Estate in Vadodara | Buy, Sell, Rent Property | Vadodara Homes",
  description:
    "Looking for the best real estate services in Vadodara? Buy, sell, or rent flats, apartments, houses, plots & commercial properties. Trusted real estate agents serving Alkapuri, Manjalpur, Gotri & all 60+ areas. Call now!",
  keywords: [
    "Real Estate in Vadodara",
    "Best Real Estate in Vadodara",
    "Property in Vadodara",
    "Flats in Vadodara",
    "Apartments in Vadodara",
    "Houses for Sale Vadodara",
    "Plots in Vadodara",
    "Commercial Property Vadodara",
    "Real Estate Agents Vadodara",
    "Property Dealers Vadodara",
    "Buy Property Vadodara",
    "Rent Property Vadodara",
    ...business.services.map((s) => `${s} in Vadodara`),
    ...business.areas.slice(0, 20).map((a) => `Real Estate in ${getAreaDisplayName(a)}`),
  ],
  openGraph: {
    title: "Best Real Estate in Vadodara | Buy, Sell, Rent Property | Vadodara Homes",
    description: content.heroSubtitle,
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Homes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Real Estate in Vadodara | Vadodara Homes",
    description: content.heroSubtitle,
  },
  alternates: {
    canonical: "https://vadodarahomes.in",
  },
};

export default function HomePage() {
  return <BusinessPageTemplate business={business} area="vadodara" content={content} />;
}
