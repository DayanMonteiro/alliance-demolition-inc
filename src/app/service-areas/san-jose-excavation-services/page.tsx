import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanJoseExcavationServicesPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanJoseExcavationServices}
    />
  );
}