import styles from "./ExcavationCustomerService.module.css";
import { excavationCustomerServiceContent } from "../../definitions";
import Button from "@/src/components/Button";

const ExcavationCustomerService = () => {
  const content = excavationCustomerServiceContent;

  return (
    <section
      className={styles.ExcavationCustomerService}
      style={{
        backgroundImage: `url(${content.backgroundImage})`,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>

        {content.paragraphs.map((paragraph, index) => (
          <p className={styles.text} key={index}>{paragraph}</p>
        ))}

        <h3 className={styles.secondaryTitle} >{content.secondaryTitle}</h3>

        {content.secondaryParagraphs.map((paragraph, index) => (
          <p className={styles.text} key={index}>{paragraph}</p>
        ))}

        <div className={styles.actions}>
          <Button href="tel:+16509317775" variant="dark" size="lg">
            CALL US!
          </Button>

          <Button href="/contact" variant="primary" size="lg">
            MESSAGE US!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcavationCustomerService;
