import React from "react";
import { styles } from "./styles.js";

function Navbar({ siteName }) {
  return (
    <nav style={styles.navbar}>
      <span style={styles.navBrand}>{siteName}</span>
      <div style={styles.navLinks}>
        <a href="#features" style={styles.navLink}>Features</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
