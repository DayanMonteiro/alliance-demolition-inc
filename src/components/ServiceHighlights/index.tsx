import styles from "./ServiceHighlights.module.css";

interface Props {
  items: string[];
  title?: string;
}

const ServiceHighlights = ({ items, title }: Props) => {
  return (
    <div className={styles.ServiceHighlights}>
      {title && <h3 className={styles.textTitle}>{title}</h3>}

      <div className={styles.container}>
        {items.map((item) => (
          <div key={item} className={styles.item}>
            <span className={styles.arrow}>▶</span>

            <p className={styles.textInfo}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
