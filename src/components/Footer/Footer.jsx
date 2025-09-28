import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <sub className={styles.footerText}>
          {new Date().getFullYear()} · Mark Joshua Urbano · Some bugs may apply :)
        </sub>
      </div>
    </footer>
  );
}
