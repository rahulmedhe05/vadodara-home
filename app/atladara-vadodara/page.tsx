import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Atladara Vadodara | Budget Flats Near Industrial Area",
  description: "Find budget property in Atladara Vadodara. Affordable 1/2 BHK flats from ₹18L near GIDC. Working class housing with rental income potential. EMI from ₹12,000.",
  keywords: "property in atladara vadodara, atladara flats, budget flats atladara, affordable housing vadodara, gidc vadodara flats",
};

export default function AtladaraVadodaraPage() {
  return <AreaPageTemplate area="atladara" areaName="Atladara" />;
}
