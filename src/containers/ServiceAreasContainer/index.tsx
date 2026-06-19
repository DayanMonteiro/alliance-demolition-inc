import ServiceAreaSection from "./components/ServiceAreaSection";
import { serviceAreasContent } from "./definitions";
import styles from "./ServiceAreasContainer.module.css";

const ServiceAreasContainer = () => {
  return (
    <main className={styles.ServiceAreasContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>{serviceAreasContent.title}</h1>

        {serviceAreasContent.sections.map((section) => (
          <ServiceAreaSection
            key={section.title}
            title={section.title}
            description={section.description}
            links={section.links}
          />
        ))}
      </div>
    </main>
  );
};

export default ServiceAreasContainer;
