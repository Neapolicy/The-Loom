export const styles = {
  app: {
    fontFamily: "'Georgia', serif",
    minHeight: "100vh",
    background: "#0f0f0f",
    color: "#f0ece4",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 2.5rem",
    borderBottom: "1px solid #2a2a2a",
    background: "#0f0f0f",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navBrand: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    color: "#e8c97e",
  },
  navLinks: { display: "flex", gap: "2rem" },
  navLink: { color: "#a8a09a", textDecoration: "none", fontSize: "0.95rem" },

  hero: {
    textAlign: "center",
    padding: "7rem 2rem 5rem",
    background: "radial-gradient(ellipse at 50% 0%, #2a1f0a 0%, #0f0f0f 65%)",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    margin: "0 0 1rem",
    color: "#e8c97e",
    letterSpacing: "-0.02em",
  },
  heroTagline: {
    fontSize: "1.15rem",
    color: "#9a9086",
    maxWidth: 520,
    margin: "0 auto 2.5rem",
    lineHeight: 1.7,
  },
  button: {
    padding: "0.85rem 2.2rem",
    background: "#e8c97e",
    color: "#0f0f0f",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    letterSpacing: "0.04em",
  },

  featuresSection: { padding: "5rem 2.5rem", maxWidth: 1100, margin: "0 auto" },
  sectionTitle: {
    textAlign: "center",
    fontSize: "1.8rem",
    marginBottom: "3rem",
    color: "#f0ece4",
    fontWeight: "normal",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#191919",
    border: "1px solid #2a2a2a",
    borderRadius: "8px",
    padding: "2rem",
  },
  cardIcon: { fontSize: "2rem", display: "block", marginBottom: "1rem" },
  cardTitle: { fontSize: "1.1rem", marginBottom: "0.6rem", color: "#e8c97e" },
  cardDescription: {
    color: "#7a726a",
    lineHeight: 1.7,
    margin: 0,
    fontSize: "0.95rem",
  },

  footer: {
    borderTop: "1px solid #2a2a2a",
    padding: "2rem",
    textAlign: "center",
  },
  footerText: { color: "#4a4440", fontSize: "0.875rem", margin: 0 },

  toast: {
    position: "fixed",
    bottom: "2rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#e8c97e",
    color: "#0f0f0f",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  messages: {
    display: "flex"
  },
};
