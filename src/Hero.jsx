import React from "react";
import { styles } from "./styles.js";

function Hero({ greeting, tagline, cta, onCtaClick }) {
  return (
    <section style={styles.hero}>
      <h1 style={styles.heroTitle}>{greeting}</h1>
      <p style={styles.heroTagline}>{tagline}</p>
      <button style={styles.button} onClick={onCtaClick}>{cta}</button>
    </section>
  );
}

export default Hero;
