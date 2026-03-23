import React from "react";
import { styles } from "./styles.js";

function FeatureCard({ icon, title, description }) {
  return (
    <div style={styles.card}>
      <span style={styles.cardIcon}>{icon}</span>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDescription}>{description}</p>
    </div>
  );
}

function FeaturesSection({ features }) {
  return (
    <section id="features" style={styles.featuresSection}>
      <h2 style={styles.sectionTitle}>Why this boilerplate?</h2>
      <div style={styles.cardGrid}>
        {features.map(function (feature) {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export { FeatureCard, FeaturesSection };
