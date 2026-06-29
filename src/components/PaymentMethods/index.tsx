import Image from "next/image";

import styles from "./PaymentMethods.module.css";

import { paymentMethods, socialMedia } from "@/src/services/payment";

const PaymentMethods = () => {
  return (
    <section className={styles.PaymentMethods}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Payment Methods</h3>

          <div className={styles.iconGrid}>
            {paymentMethods.map((item) => (
              <div
                key={item.name}
                className={styles.IconWrapper}
                style={{ background: item.backgroundColor }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={35}
                  height={35}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sectionsocial}>
          <h3 className={styles.sectionTitle}>Social</h3>

          <div className={styles.iconGrid}>
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.IconWrapper}
                style={{ background: item.backgroundColor }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={35}
                  height={35}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;