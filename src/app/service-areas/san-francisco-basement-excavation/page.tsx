import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";

export default function SanFranciscoBasementExcavationPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanFranciscoBasementExcavation}
    />
  );
}