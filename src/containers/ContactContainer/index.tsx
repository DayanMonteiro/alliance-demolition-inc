import ContactForm from "./components/ContactForm";
import styles from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <div className={styles.ContactContainer}>
      <h1 className={styles.title}>Contact Alliance Demolition Inc</h1>
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
