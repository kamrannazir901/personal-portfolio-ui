import styles from "./Footer.module.css";
import gmailicon from "../../assets/images/gmail.webp";
import whatsapp from "../../assets/images/whatsapp.png";
import fbicon from "../../assets/images/fbicon.png";
import instaicon from "../../assets/images/instaicon.png";
import LinkedInicon from "../../assets/images/linked-icon.webp";
import githubicon from "../../assets/images/githubicon.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.title}>Kamranify</h3>

      <div className={styles.footerSocials}>
        <a href="mailto:kamranify@gmail.com" title="Send Email">
          <img src={gmailicon} alt="Gmail" className={styles.icon} />
        </a>
        <a
          href="https://wa.me/923319982619"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Me"
        >
          <img src={whatsapp} alt="WhatsApp" className={styles.icon} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Facebook"
        >
          <img src={fbicon} alt="Facebook" className={styles.icon} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit Instagram"
        >
          <img src={instaicon} alt="Instagram" className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit LinkedIn"
        >
          <img src={LinkedInicon} alt="LinkedIn" className={styles.icon} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit GitHub"
        >
          <img src={githubicon} alt="GitHub" className={styles.icon} />
        </a>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Kamranify. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
