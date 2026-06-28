import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";


export default function BasementExcavationPage() {
  return (
    <ServicePageContainer content={servicePagesContent.basementExcavation} />
  );
}