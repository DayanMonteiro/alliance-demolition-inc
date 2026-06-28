import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function DemolitionContractorPage() {
  return (
    <ServicePageContainer
      content={servicePagesContent.demolitionContractor}
    />
  );
}