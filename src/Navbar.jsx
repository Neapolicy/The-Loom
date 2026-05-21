import React from "react";

function Navbar({ siteName }) {
  return (
    <nav>
      <span>{siteName}</span>
      <div>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
