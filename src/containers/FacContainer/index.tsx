import FaqAccordion from "./components/FaqAccordion";
import { faqContent } from "./definitions";
import styles from "./FaqContainer.module.css";

const FaqContainer = () => {
  return (
    <main className={styles.FaqContainer}>
      <section className={styles.content}>
        <h1>{faqContent.title}</h1>

        {faqContent.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <FaqAccordion items={faqContent.questions} />
      </section>
    </main>
  );
};

export default FaqContainer;
