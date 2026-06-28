import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function ExcavationServicesPage() {
  return (
    <ServicePageContainer content={servicePagesContent.excavationServices} />
  );
}