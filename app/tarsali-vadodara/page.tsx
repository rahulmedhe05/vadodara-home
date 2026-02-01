import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Tarsali Vadodara | Growing Suburb Flats & Plots",
  description: "Find property in Tarsali Vadodara. Emerging residential hub with 2/3 BHK flats from ₹32L. Ring road connectivity, new developments. High appreciation potential.",
  keywords: "property in tarsali vadodara, tarsali flats, tarsali vadodara property rates, new projects tarsali, plots in tarsali",
};

export default function TarsaliVadodaraPage() {
  return <AreaPageTemplate area="tarsali" areaName="Tarsali" />;
}
