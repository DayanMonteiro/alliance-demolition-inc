import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";

export default function SanJoseGradingPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanJoseGrading}
    />
  );
}