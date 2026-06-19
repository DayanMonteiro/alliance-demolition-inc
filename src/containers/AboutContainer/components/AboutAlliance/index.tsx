import Image from "next/image";
import styles from "./AboutAlliance.module.css";
import { aboutAllianceContent } from "../../definitions";
import Button from "@/src/components/Button";

const AboutAlliance = () => {
  return (
    <section className={styles.AboutAlliance}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={aboutAllianceContent.image.src}
            alt={aboutAllianceContent.image.alt}
            width={700}
            height={700}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2>{aboutAllianceContent.title}</h2>

          <h3>{aboutAllianceContent.subtitle}</h3>

          {aboutAllianceContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <Button
            href={aboutAllianceContent.buttonHref}
            variant="secondary"
            size="lg"
          >
            {aboutAllianceContent.buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutAlliance;
