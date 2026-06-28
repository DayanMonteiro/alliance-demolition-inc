

import ServiceHighlights from "../ServiceHighlights";
import styles from "./ResidentialDemolition.module.css";

const ResidentialDemolition = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Residential Demolition Services Bay Area</h2>

        <p>
          <b>Our home demolition services</b> are professionally executed,
          comprehensive, and affordable. We carefully identify and remove
          salvageable items such as fixtures, metals, and other valuable
          materials before demolition begins.
        </p>

        <p>
          <b>Alliance Demolition Inc.</b> conducts every project with safety,
          precision, and environmental responsibility. Our team thoroughly
          inspects the site, mitigates hazards, and ensures all debris is
          removed and recycled whenever possible.
        </p>

        <p>
          <b>We make sure</b> your property is clean, safe, and ready for the
          next phase of construction, remodeling, or redevelopment.
        </p>

        <p>
          <b>Commercial demolition</b> is performed by experienced professionals
          capable of handling full structural removals, selective demolition,
          and deconstruction projects while minimizing impact on surrounding
          structures.
        </p>

        <p>
          <b>When it comes to complex demolition projects</b>, our team has the
          expertise, equipment, and planning capabilities required to deliver
          exceptional results.
        </p>

        <p>
          <b>Alliance Demolition Inc.</b> proudly serves San Mateo County and
          the entire San Francisco Bay Area with dependable, cost-effective
          demolition solutions.
        </p>

        <h3>Commercial Interior Demolition Services</h3>

        <ServiceHighlights
          items={[
            "Full Commercial Demolition",
            "Lot Clearing",
            "Interior Demolition",
            "Selective Demolition",
          ]}
        />
      </div>
    </section>
  );
};

export default ResidentialDemolition;
