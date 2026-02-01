import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Akota Vadodara | Premium Flats Near Akota Stadium",
  description: "Find premium property in Akota Vadodara. Luxury 3/4 BHK flats near Akota Stadium & TP Road. Established residential area from ₹55L-2Cr. Best schools & hospitals nearby.",
  keywords: "property in akota vadodara, flats in akota, akota vadodara property rates, 3 bhk akota vadodara, akota stadium flats, tp road akota property, premium flats akota",
};

export default function AkotaVadodaraPage() {
  return <AreaPageTemplate area="akota" areaName="Akota" />;
}
