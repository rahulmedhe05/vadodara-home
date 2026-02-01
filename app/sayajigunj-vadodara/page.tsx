import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Sayajigunj Vadodara | Flats Near MS University",
  description: "Find property in Sayajigunj Vadodara near MS University. 2/3 BHK flats in cultural heart of city from ₹40L-1.2Cr. Student housing & family homes. Walk to university.",
  keywords: "property in sayajigunj vadodara, flats near ms university, sayajigunj property rates, student housing vadodara, apartments sayajigunj",
};

export default function SayajigunjVadodaraPage() {
  return <AreaPageTemplate area="sayajigunj" areaName="Sayajigunj" />;
}
