import Link from "next/link";
import styles from "./CompanyServicesContainer.module.css";
import { companyServicesContent } from "./definitions";

const CompanyServicesContainer = () => {
  return (
    <main className={styles.CompanyServicesContainer}>
      <div className={styles.container}>
        <h1>{companyServicesContent.title}</h1>

        <p className={styles.description}>{companyServicesContent.description}</p>

        <div className={styles.grid}>
          {companyServicesContent.services.map((service) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CompanyServicesContainer;