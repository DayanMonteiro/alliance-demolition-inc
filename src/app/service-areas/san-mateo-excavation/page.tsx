import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanMateoExcavationPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanMateoExcavation}
    />
  );
}