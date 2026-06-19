import styles from "./ServiceDetailsSection.module.css";

interface Paragraph {
  strong?: string;
  text?: string;
}

interface Section {
  title?: string;
  paragraphs: Paragraph[];
}

interface Props {
  content: {
    title?: string;
    sections: Section[];
  };
}

const ServiceDetailsSection = ({ content }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{content.title}</h2>

        {content.sections.map((section, index) => (
          <div
            key={`${section.title || "section"}-${index}`}
            className={styles.serviceBlock}
          >
            <h3>{section.title}</h3>

            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <strong>{paragraph.strong}</strong>
                {paragraph.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
