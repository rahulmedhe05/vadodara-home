import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Nizampura Vadodara | Central Location Flats",
  description: "Find property in Nizampura Vadodara in heart of city. Centrally located 2/3 BHK flats from ₹42L-1Cr. Walking distance to railway station. Urban convenience.",
  keywords: "property in nizampura vadodara, nizampura flats, central vadodara property, flats near railway station vadodara",
};

export default function NizampuraVadodaraPage() {
  return <AreaPageTemplate area="nizampura" areaName="Nizampura" />;
}
