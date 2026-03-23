import React, { useState } from "react";
import SITE_CONTENT from "./content.js";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import { FeaturesSection } from "./Features.jsx";
import Footer from "./Footer.jsx";
import Toast from "./Toast.jsx";
import Chatbot from "./Chatbot.jsx";
import { styles } from "./styles.js";

function App() {
  const [toast, setToast] = useState("");

  function handleCta() {
    setToast("🚀 You're ready to build!");
    setTimeout(function () {
      setToast("");
    }, 3000);
  }

  return (
    <div style={styles.app}>
      <Navbar siteName={SITE_CONTENT.siteName} />
      {/* <Hero
        greeting={SITE_CONTENT.hero.greeting}
        tagline={SITE_CONTENT.hero.tagline}
        cta={SITE_CONTENT.hero.cta}
        onCtaClick={handleCta}
      /> */}
      {/* <FeaturesSection features={SITE_CONTENT.features} /> */}
      <Chatbot />
      <Footer copy={SITE_CONTENT.footer.copy} />
      <Toast message={toast} />
    </div>
  );
}

export default App;
