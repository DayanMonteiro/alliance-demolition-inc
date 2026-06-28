import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function TrenchingServicesPage() {
  return (
    <ServicePageContainer content={servicePagesContent.trenchingServices} />
  );
}