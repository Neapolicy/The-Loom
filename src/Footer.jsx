import React from "react";
import { styles } from "./styles.js";

function Footer({ copy }) {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>{copy}</p>
    </footer>
  );
}

export default Footer;
