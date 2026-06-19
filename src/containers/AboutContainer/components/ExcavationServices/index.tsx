import styles from "./ExcavationServices.module.css";
import { excavationServicesSectionContent } from "../../definitions";
import ServiceHighlights from "@/src/components/ServiceHighlights";

const ExcavationServicesSection = () => {
  const content = excavationServicesSectionContent;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{content.title}</h2>

        {content.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <ServiceHighlights items={content.services} />

        <p className={styles.spacing}>{content.middleContent[0].text}</p>

        <h3>{content.middleContent[1].title}</h3>

        {content.middleContent[1].paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h3>{content.middleContent[2].title}</h3>

        {content.middleContent[2].paragraphs?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <ServiceHighlights items={content.communityServices} />

        <p className={styles.spacing}>{content.conclusion}</p>
      </div>
    </section>
  );
};

export default ExcavationServicesSection;
