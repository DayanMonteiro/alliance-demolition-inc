import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanJoseDemolitionPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanJoseDemolition}
    />
  );
}