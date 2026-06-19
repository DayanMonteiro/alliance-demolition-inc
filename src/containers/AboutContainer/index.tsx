import styles from "./AboutContainer.module.css";
import AboutAlliance from "./components/AboutAlliance";
import ExcavationCustomerService from "./components/ExcavationCustomerService";
import ExcavationServices from "./components/ExcavationServices";

const AboutContainer = () => {
  return (
    <div className={styles.AboutContainer}>
      <AboutAlliance />
      <ExcavationServices />
      <ExcavationCustomerService />
    </div>
  );
};

export default AboutContainer;
