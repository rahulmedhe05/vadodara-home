import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Fatehgunj Vadodara | Commercial & Residential Flats",
  description: "Find property in Fatehgunj Vadodara - the commercial heart of the city. Premium flats, offices & shops in Vadodara's business district. 2/3 BHK from ₹55L. Prime location for business & living.",
  keywords: "property in fatehgunj vadodara, flats in fatehgunj, fatehgunj vadodara property rates, commercial property fatehgunj, office space fatehgunj vadodara, shops in fatehgunj, fatehgunj real estate, business hub vadodara, fatehgunj pin code",
  openGraph: {
    title: "Property in Fatehgunj Vadodara | Commercial Business Hub",
    description: "Premium properties in Fatehgunj - Vadodara's commercial nerve center. Flats, offices & shops in the busiest business district. Walk to work, walk to everything.",
    type: "website",
  },
};

export default function FatehgunjVadodaraPage() {
  return <AreaPageTemplate area="fatehgunj" areaName="Fatehgunj" />;
}
