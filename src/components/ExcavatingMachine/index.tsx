import Button from "../Button";
import styles from "./ExcavatingMachine.module.css";

const ExcavatingMachine = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.badge}>Licensed • Bonded • Insured</span>

        <h1>
          Demolition Contractor Services
          <br />
          SF Bay Area
        </h1>

        <p>
          Our demolition crew provides top quality affordable residential and
          commercial demolition services, specializing in Demolition &
          Deconstruction.
        </p>

        <p>
          We offer a full range of services from commercial salvage, remodeling
          and renovation, to construction site preparation, interior or exterior
          demolition services throughout the San Francisco Bay Area.
        </p>

        <div className={styles.actions}>
          {/* ENVIAR PARA A PAGINA DE CONTATO COM O FORMULÁRIO */}
          <Button href="tel:+16509317775" variant="primaryRadios" size="lg">
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExcavatingMachine;
