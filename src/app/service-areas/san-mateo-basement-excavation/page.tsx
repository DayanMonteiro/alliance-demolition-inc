import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";

export default function SanMateoBasementExcavationPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanMateoBasementExcavation}
    />
  );
}