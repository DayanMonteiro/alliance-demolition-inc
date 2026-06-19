import styles from "./HomeContainer.module.css";




import ExcavatingMachine from "./components/ExcavatingMachine";
import LicenseCertifications from "./components/LicenseCertifications";
import ServiceHighlights from "../../components/ServiceHighlights";

import SelectiveDemolitionCTA from "./components/SelectiveDemolitionCTA";
import PaymentMethods from "./components/PaymentMethods";
import TextContentSection from "@/src/components/TextContentSection";
import { commercialDemolitionDetails, commercialDemolitionServicesList, deconstructionContent, residentialDemolitionContent, residentialDemolitionServicesContent, residentialServicesList } from "@/src/containers/HomeContainer/definitions";
import ServiceDetailsSection from "@/src/components/ServiceDetailsSection";

const HomeContainer = () => {
  return (
    <div className={styles.HomeContainer}>
      <ExcavatingMachine />
      <LicenseCertifications />

      <TextContentSection content={residentialDemolitionContent} />

      <ServiceHighlights
        items={commercialDemolitionServicesList}
        title="Commercial Interior Demolition Services"
      />

      <TextContentSection content={deconstructionContent} />

      <TextContentSection content={residentialDemolitionServicesContent} />

      <ServiceHighlights items={residentialServicesList} />

      <ServiceDetailsSection content={commercialDemolitionDetails} />

      <SelectiveDemolitionCTA />

      <PaymentMethods />
    </div>
  );
};

export default HomeContainer;
