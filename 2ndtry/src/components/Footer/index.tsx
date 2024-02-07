// Import React and necessary components
import React from "react";
import { Img } from "../Img"; // Adjust the import path as needed
import {Text} from "../Text";
import styles from "./Footer.module.css"; // Import your CSS Module
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";

// Define the FooterProps type
type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

// Define the Footer component
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      {/* Footer container with styles from CSS module and optional className */}
      <footer className={`${styles.footer__container} ${props.className || ""}`}>
        <div className={styles.footer__branding}>
          <Img src={logo} alt={logo} />
          <Text>
            Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.
          </Text>
          <div className={styles.footer__social}>
            <Img src={facebook} alt={facebook} />
            <Img src={twitter} alt={twitter} />
            <Img src={instagram} alt={instagram} />
            <Img src={youtube} alt={youtube} />
          </div>
        </div>
        <div className={styles.footer__menu}>
          <div className={styles.footer__menu__column}>
            <h3>Project</h3>
            <ul className={styles.footer__menu__items}>
              <li>Houses</li>
              <li>Rooms</li>
              <li>Flat</li>
              <li>Apartments</li>
            </ul>
          </div>
          <div className={styles.footer__menu__column}>
            <h3>Company</h3>
            <ul className={styles.footer__menu__items}>
              <li>How we work ?</li>
              <li>Capital</li>
              <li>Security</li>
            </ul>
          </div>
          <div className={styles.footer__menu__column}>
            <h3>Movement</h3>
            <ul className={styles.footer__menu__items}>
              <li>Who are we</li>
              <li>Support us</li>
            </ul>
          </div>
          <div className={styles.footer__menu__column}>
            <h3>Help</h3>
            <ul className={styles.footer__menu__items}>
              <li>Privacy</li>
              <li>Condition</li>
              <li>Blog</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

// Set default props for the Footer component
Footer.defaultProps = {};

// Export the Footer component
export default Footer;
