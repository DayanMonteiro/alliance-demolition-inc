import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanMateoDemolitionPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanMateoDemolition}
    />
  );
}