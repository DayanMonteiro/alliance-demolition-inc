import Image from "next/image";
import LogoImg from "../../../public/logo.svg";

import styles from "./LicenseCertifications.module.css";

const LicenseCertifications = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoArea}>
          <Image
            src={LogoImg}
            alt="Alliance Demolition Inc"
            width={150}
            height={150}
          />

          <div>
            <h2>LICENSE & CERTIFICATIONS</h2>
          </div>
        </div>

        <div className={styles.content}>
          <h3>LICENSED • INSURED • DOT REGISTERED</h3>

          <p>
            <strong>License #1059495</strong>
          </p>

          <p>
            <strong>DOT #3372937</strong>
          </p>

          <p>Proudly Serving San Mateo County & the San Francisco Bay Area</p>

          <p>
            Fully Licensed, Insured and Committed to Safe, Professional
            Demolition Services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicenseCertifications;
