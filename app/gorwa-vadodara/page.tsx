import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Gorwa Vadodara | Flats Near IPCL & Refinery",
  description: "Find property in Gorwa Vadodara near IPCL & Gujarat Refinery. 2/3 BHK flats for refinery employees from ₹35L-90L. Established industrial township living.",
  keywords: "property in gorwa vadodara, gorwa flats, ipcl vadodara property, refinery township gorwa, 3 bhk gorwa",
};

export default function GorwaVadodaraPage() {
  return <AreaPageTemplate area="gorwa" areaName="Gorwa" />;
}
