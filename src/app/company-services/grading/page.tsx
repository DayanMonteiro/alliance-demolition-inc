import ServicePageContainer from "@/src/containers/ServicePageContainer";
import { servicePagesContent } from "@/src/containers/ServicePageContainer/definitions";

export default function GradingPage() {
  return <ServicePageContainer content={servicePagesContent.grading} />;
}