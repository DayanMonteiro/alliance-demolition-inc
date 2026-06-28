import Image from "next/image";

import { ServiceIntroContent } from "../../definitions";

import styles from "./ServiceIntroSection.module.css";
import Button from "@/src/components/Button";

interface ServiceIntroSectionProps {
  content: ServiceIntroContent;
}

const ServiceIntroSection = ({ content }: ServiceIntroSectionProps) => {
  return (
    <section className={styles.ServiceIntroSection}>
      <div className={styles.imageWrapper}>
        <Image
          src={content.image}
          alt={content.imageAlt}
          width={900}
          height={620}
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.textContent}>
        <h1>{content.title}</h1>

        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <Button href={content.buttonHref} variant="secondary" size="lg">
          {content.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default ServiceIntroSection;