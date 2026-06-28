import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";

export default function SanFranciscoExcavationServicesPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanFranciscoExcavationServices}
    />
  );
}