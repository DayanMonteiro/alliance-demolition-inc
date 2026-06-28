import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";


export default function DemolitionServicesPage() {
  return (
    <ServicePageContainer content={servicePagesContent.demolitionServices} />
  );
}