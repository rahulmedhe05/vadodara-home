import type { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Real Estate in Ajwa Road, Vadodara | Flats, Houses, Villas, Property for Sale & Rent",
  description: "Find the best real estate properties in Ajwa Road, Vadodara. Buy/sell 1BHK, 2BHK, 3BHK flats, independent houses, villas, plots & commercial properties. Get expert property consultation & free site visits. RERA approved projects with bank loan facility.",
  keywords: "real estate ajwa road vadodara, flats in ajwa road, property for sale ajwa road vadodara, 2 bhk flat ajwa road, 3 bhk apartment ajwa road, houses in ajwa road vadodara, villa ajwa road, plot for sale ajwa road, commercial property ajwa road, property dealer ajwa road vadodara, flat for rent ajwa road",
  openGraph: {
    title: "Real Estate in Ajwa Road, Vadodara | Premium Properties for Sale",
    description: "Discover premium flats, houses, villas & commercial properties on Ajwa Road, Vadodara. Expert property consultation with 15+ years experience.",
    type: "website",
    locale: "en_IN",
  },
};

export default function AjwaRoadVadodaraPage() {
  return <AreaPageTemplate area="ajwa-road" areaName="Ajwa Road" />;
}
