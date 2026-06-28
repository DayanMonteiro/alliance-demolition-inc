import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function DrivewayExcavationPage() {
  return (
    <ServicePageContainer content={servicePagesContent.drivewayExcavation} />
  );
}