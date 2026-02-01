import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Manjalpur Vadodara | Affordable Flats & Plots | Industrial Hub Living 2025",
  description: "Buy property in Manjalpur Vadodara - affordable 1/2/3 BHK flats near GIDC industrial area. Budget homes from ₹18L, plots & commercial spaces. Working class families preferred location. Book now!",
  keywords: [
    "property in manjalpur vadodara",
    "flats in manjalpur",
    "2 bhk flat in manjalpur vadodara",
    "3 bhk flat in manjalpur",
    "affordable homes manjalpur",
    "manjalpur property rates",
    "property near gidc vadodara",
    "manjalpur vadodara pin code",
    "budget flats manjalpur",
    "new projects manjalpur",
    "manjalpur real estate",
    "industrial area property vadodara",
    "working class homes vadodara"
  ],
  openGraph: {
    title: "Property in Manjalpur Vadodara | Affordable Industrial Hub Living",
    description: "Discover affordable homes in Manjalpur near GIDC. Budget-friendly flats, plots & commercial spaces for working families.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/manjalpur-vadodara",
  },
};

export default function ManjalpurPage() {
  return <AreaPageTemplate area="manjalpur" areaName="Manjalpur" />;
}
