import React, { useState } from "react";
import SITE_CONTENT from "./content.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";

function App() {

  return (
    <div className="app">
      <Navbar siteName={SITE_CONTENT.siteName} />
      <Chatbot />
      <Footer copy={SITE_CONTENT.footer.copy} />
    </div>
  );
}
// test

export default App;
