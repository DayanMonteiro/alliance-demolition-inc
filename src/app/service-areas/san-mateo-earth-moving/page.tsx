import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanMateoEarthMovingPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanMateoEarthMoving}
    />
  );
}