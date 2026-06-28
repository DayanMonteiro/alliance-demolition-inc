import { ServiceFeatureBoxContent } from "../../definitions";

import styles from "./ServiceFeatureBox.module.css";

interface ServiceFeatureBoxProps {
  content: ServiceFeatureBoxContent;
}

const ServiceFeatureBox = ({ content }: ServiceFeatureBoxProps) => {
  return (
    <div className={styles.ServiceFeatureBox}>
      {content.intro && <p className={styles.intro}>{content.intro}</p>}

      <div className={styles.grid}>
        {content.items.map((item) => (
          <div key={item} className={styles.item}>
            <span className={styles.arrow}>▶</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatureBox;