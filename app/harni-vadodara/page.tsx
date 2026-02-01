import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Harni Vadodara | Flats Near Airport | Premium Homes Harni",
  description: "Find premium property in Harni Vadodara near airport. Luxury flats, villas & plots in Vadodara's connectivity hub. 3/4 BHK apartments from ₹65L. NRI-friendly investment with airport access.",
  keywords: "property in harni vadodara, flats near vadodara airport, harni vadodara property rates, premium flats harni, villas in harni vadodara, nri property vadodara, harni real estate, apartments near airport vadodara, luxury homes harni, harni vadodara pin code",
  openGraph: {
    title: "Property in Harni Vadodara | Airport Proximity Premium Living",
    description: "Premium properties in Harni - Vadodara's airport corridor. Luxury apartments, villas & plots with excellent connectivity. NRI-preferred investment destination.",
    type: "website",
  },
};

export default function HarniVadodaraPage() {
  return <AreaPageTemplate area="harni" areaName="Harni" />;
}
