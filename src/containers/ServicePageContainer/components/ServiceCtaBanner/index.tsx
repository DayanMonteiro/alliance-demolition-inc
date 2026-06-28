

import Button from "@/src/components/Button";
import { ServiceCtaContent } from "../../definitions";

import styles from "./ServiceCtaBanner.module.css";

interface ServiceCtaBannerProps {
  content: ServiceCtaContent;
}

const ServiceCtaBanner = ({ content }: ServiceCtaBannerProps) => {
  return (
    <section className={styles.ServiceCtaBanner}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2>{content.title}</h2>

        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className={styles.actions}>
          <Button href={content.primaryButton.href} variant="dark" size="lg">
            {content.primaryButton.label}
          </Button>

          <Button href={content.secondaryButton.href} variant="primary" size="lg">
            {content.secondaryButton.label}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCtaBanner;