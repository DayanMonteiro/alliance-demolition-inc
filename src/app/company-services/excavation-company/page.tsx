import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function ExcavationCompanyPage() {
  return (
    <ServicePageContainer content={servicePagesContent.excavationCompany} />
  );
}