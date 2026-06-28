import ServiceAreaDetailsContainer from "@/src/containers/ServiceAreaDetailContainer";
import { serviceAreaDetailsContent } from "@/src/containers/ServiceAreaDetailContainer/definitions";


export default function SanFranciscoExcavationCompanyPage() {
  return (
    <ServiceAreaDetailsContainer
      content={serviceAreaDetailsContent.sanFranciscoExcavationCompany}
    />
  );
}