import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";

export default function SanFranciscoGradingPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanFranciscoGrading}
    />
  );
}