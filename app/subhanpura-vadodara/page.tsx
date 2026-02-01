import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Subhanpura Vadodara | Family Flats & Apartments",
  description: "Find family-friendly property in Subhanpura Vadodara. Premium 2/3/4 BHK flats in established residential locality. Excellent schools, parks & amenities. ₹45L-1.5Cr. Perfect for families.",
  keywords: "property in subhanpura vadodara, flats in subhanpura, subhanpura vadodara property rates, 3 bhk subhanpura vadodara, family flats subhanpura, apartments subhanpura vadodara, subhanpura real estate, residential property subhanpura, subhanpura vadodara pin code",
  openGraph: {
    title: "Property in Subhanpura Vadodara | Family-Friendly Premium Living",
    description: "Subhanpura - Vadodara's preferred family locality. Premium apartments with excellent schools, parks, and healthcare. The perfect balance of location, amenities, and value.",
    type: "website",
  },
};

export default function SubhanpuraVadodaraPage() {
  return <AreaPageTemplate area="subhanpura" areaName="Subhanpura" />;
}
