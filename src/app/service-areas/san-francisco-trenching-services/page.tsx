import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanFranciscoTrenchingServicesPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanFranciscoTrenchingServices}
    />
  );
}