import React, { useState } from "react";
import SITE_CONTENT from "./content.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
