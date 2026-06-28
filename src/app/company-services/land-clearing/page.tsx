import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function LandClearingPage() {
  return <ServicePageContainer content={servicePagesContent.landClearing} />;
}