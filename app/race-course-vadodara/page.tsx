import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property in Race Course Vadodara | Ultra Luxury Flats & Bungalows",
  description: "Find ultra-luxury property in Race Course Vadodara - the city's most elite address. Premium bungalows, penthouses & 4 BHK flats near Race Course Club. ₹1.5Cr onwards. Old money meets modern luxury.",
  keywords: "property in race course vadodara, race course vadodara flats, luxury bungalow race course, 4 bhk race course vadodara, race course club vadodara, premium property vadodara, ultra luxury flats vadodara, elite property vadodara, race course road property",
  openGraph: {
    title: "Property in Race Course Vadodara | Ultra Luxury Elite Living",
    description: "Vadodara's most prestigious address - Race Course. Ultra-luxury bungalows, penthouses and premium apartments where old money and new success meet.",
    type: "website",
  },
};

export default function RaceCourseVadodaraPage() {
  return <AreaPageTemplate area="race-course" areaName="Race Course" />;
}
