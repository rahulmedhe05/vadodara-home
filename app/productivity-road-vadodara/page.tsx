import { Metadata } from "next";
import { AreaPageTemplate } from "@/components/area-page-template";

export const metadata: Metadata = {
  title: "Property on Productivity Road Vadodara | Commercial & Industrial",
  description: "Find commercial property on Productivity Road Vadodara. Offices, showrooms, warehouses & industrial spaces from ₹5000/sq.ft. Prime business location with high visibility.",
  keywords: "property productivity road vadodara, commercial property vadodara, office space productivity road, showroom vadodara, industrial property",
};

export default function ProductivityRoadVadodaraPage() {
  return <AreaPageTemplate area="productivity-road" areaName="Productivity Road" />;
}
