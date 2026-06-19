import Button from "../Button";
import styles from "./SelectiveDemolitionCTA.module.css";

const SelectiveDemolitionCTA = () => {
  return (
    <section className={styles.SelectiveDemolitionCTA}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2>Selective and Controlled Demolition</h2>

        <p>
          <strong>Alliance Demolition Inc.</strong> provides precision
          demolition services designed to remove specific portions of a
          structure while preserving surrounding areas. Our experienced team
          uses advanced equipment and proven techniques to ensure safety,
          efficiency, and minimal disruption.
        </p>

        <p>
          Whether your project requires selective demolition, interior
          demolition, deconstruction, or structural modifications, we deliver
          reliable solutions throughout the San Francisco Bay Area.
        </p>

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

export default SelectiveDemolitionCTA;
