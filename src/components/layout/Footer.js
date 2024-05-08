import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "../layout/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>

        <li>
          <FaGithub />
        </li>

        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Building Dreams</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
