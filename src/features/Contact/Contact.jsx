import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me</h2>
        <p className={styles.subtitle}>
          I’d love to hear from you! Whether it’s a project, job opportunity, or just a chat.
        </p>

        <div className={styles.contactLinks}>
          <a href="mailto:markjoshuaurbano@gmail.com.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>Email</span>
          </a>

          <a href="https://linkedin.com/in/urbanomarkjoshua" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/Josh-yy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
  );
}

export default Contact;
