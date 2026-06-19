import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Contact Info</h3>

          <p>San Mateo, CA 94403-1044</p>

          <p>
            Phone:
            <a href="tel:+16509317775">(650) 931-7775</a>
          </p>

          <p>
            <a href="mailto:alliancedemolitionca@gmail.com">
              alliancedemolitionca@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.column}>
          <h3>Hours of Operation</h3>

          <p>Sat - Fri: 8:00AM - 5:00PM</p>

          <p>Sun: Closed</p>

          <p>Emergency Services Available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
