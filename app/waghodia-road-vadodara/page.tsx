import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property on Waghodia Road Vadodara | Student Housing & Rental Investment | 2025 Deals",
  description: "Buy property on Waghodia Road Vadodara near universities & colleges. Student rental investment, 2/3 BHK flats, hostels & PG buildings. High rental yield 6-8%. From ₹25L. RERA approved!",
  keywords: [
    "property on waghodia road vadodara",
    "flats on waghodia road",
    "student housing vadodara",
    "rental property waghodia road",
    "property near parul university",
    "waghodia road vadodara pin code",
    "pg building for sale vadodara",
    "hostel investment vadodara",
    "waghodia road property rates",
    "affordable flats waghodia road",
    "new projects waghodia road",
    "college area property vadodara"
  ],
  openGraph: {
    title: "Property on Waghodia Road Vadodara | Education Hub Investment",
    description: "High-yield rental properties on Waghodia Road near universities. Student housing, PGs, and residential flats with 6-8% returns.",
    type: "website",
    locale: "en_IN",
    siteName: "Vadodara Real Estate",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vadodara-realestate.com/waghodia-road-vadodara",
  },
};

export default function WaghodiaRoadPage() {
  return <AreaPageTemplate area="waghodia-road" areaName="Waghodia Road" />;
}
