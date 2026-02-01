import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Vasna Bhayli Vadodara | Affordable Flats & Plots",
  description: "Find affordable property in Vasna Bhayli Vadodara. Budget 1/2/3 BHK flats & plots from ₹20L. Emerging location with expressway connectivity. Best value investment.",
  keywords: "property in vasna bhayli vadodara, vasna bhayli flats, affordable plots bhayli, budget flats vadodara, vasna road property, bhayli vadodara rates",
};

export default function VasnaBhayliVadodaraPage() {
  return <AreaPageTemplate area="vasna-bhayli" areaName="Vasna Bhayli" />;
}
