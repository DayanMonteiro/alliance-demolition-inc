import Link from "next/link";

import styles from "./ServiceAreaSection.module.css";

interface ServiceAreaLink {
  label: string;
  href: string;
}

interface ServiceAreaSectionProps {
  title: string;
  description: string;
  links: ServiceAreaLink[];
}

const ServiceAreaSection = ({
  title,
  description,
  links,
}: ServiceAreaSectionProps) => {
  return (
    <section className={styles.ServiceAreaSection}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>

      <div className={styles.actions}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.linkButton}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreaSection;
