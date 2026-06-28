import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function SitePreparationServicesPage() {
  return (
    <ServicePageContainer
      content={servicePagesContent.sitePreparationServices}
    />
  );
}