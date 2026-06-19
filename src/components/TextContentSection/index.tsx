import styles from "./TextContentSection.module.css";

interface Paragraph {
  strong: string;
  text: string;
}

interface Props {
  content: {
    title: string;
    paragraphs: Paragraph[];
  };
}

const TextContentSection = ({ content }: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{content.title}</h2>

        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>
            <strong>{paragraph.strong}</strong>
            {paragraph.text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default TextContentSection;
