import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanMateoDrivewayExcavationPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanMateoDrivewayExcavation}
    />
  );
}