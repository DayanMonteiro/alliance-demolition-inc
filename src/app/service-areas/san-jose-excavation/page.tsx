import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanJoseExcavationPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanJoseExcavation}
    />
  );
}