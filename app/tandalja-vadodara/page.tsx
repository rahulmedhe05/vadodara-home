import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Tandalja Vadodara | Mid-Range Family Flats",
  description: "Find property in Tandalja Vadodara. Well-connected 2/3 BHK family flats from ₹35L-85L. Peaceful residential area with good schools & markets. Value for money.",
  keywords: "property in tandalja vadodara, tandalja flats, tandalja vadodara property rates, 2 bhk tandalja, 3 bhk tandalja vadodara",
};

export default function TandaljaVadodaraPage() {
  return <AreaPageTemplate area="tandalja" areaName="Tandalja" />;
}
