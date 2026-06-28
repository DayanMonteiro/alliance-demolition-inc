import ServiceFeatureBox from "../ServiceFeatureBox";

import { ServiceTextSectionContent } from "../../definitions";

import styles from "./ServiceTextSection.module.css";

interface ServiceTextSectionProps {
  section: ServiceTextSectionContent;
}

const ServiceTextSection = ({ section }: ServiceTextSectionProps) => {
  return (
    <section className={styles.ServiceTextSection}>
      {section.title && <h2>{section.title}</h2>}

      {section.subtitle && <h3>{section.subtitle}</h3>}

      {section.paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {section.featureBox && <ServiceFeatureBox content={section.featureBox} />}
    </section>
  );
};

export default ServiceTextSection;