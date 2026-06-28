import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function EarthMovingPage() {
  return <ServicePageContainer content={servicePagesContent.earthMoving} />;
}