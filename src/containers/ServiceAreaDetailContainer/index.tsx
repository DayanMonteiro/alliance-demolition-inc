

import Button from "@/src/components/Button";
import { ServiceAreaDetailsContent } from "./definitions";
import styles from "./ServiceAreaDetailsContainer.module.css";

interface ServiceAreaDetailsContainerProps {
  content: ServiceAreaDetailsContent;
}

const ServiceAreaDetailsContainer = ({
  content,
}: ServiceAreaDetailsContainerProps) => {
  return (
    <main className={styles.ServiceAreaDetailsContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{content.title}</h1>

        {content.intro.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}

        <Button href={content.buttonHref} variant="primary" size="md">
          {content.buttonText}
        </Button>

        <div className={styles.sections}>
          {content.sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

              {section.listIntro && (
                <p className={styles.paragraph}>{section.listIntro}</p>
              )}

              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.finalText && (
                <p className={styles.paragraph}>{section.finalText}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServiceAreaDetailsContainer;