import styles from "./TopBar.module.css";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function TopBar() {
  return (
    <div className={styles.TopBar}>
      <div className={styles.content}>
        <p>Lic #1059495 · DOT 3372937 · San Mateo, CA · Licensed & Insured</p>

        <a href="tel:+16509317775">
          <span className={styles.separator}>|</span>
          <MdOutlinePhoneInTalk />
          Call us at <strong>(650) 931-7775</strong>
        </a>
      </div>
    </div>
  );
}
