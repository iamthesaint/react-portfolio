import "../components/Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="container-footer">
      <p>
        <a href="https://github.com/iamthesaint">
          <img
            className="footer-logo"
            src="src/assets/github-mark.png"
            alt="github logo"
          />
        </a>
        <a href="https://www.instagram.com/iamthesaint/">
          <img
            className="footer-logo"
            src="src/assets/Instagram_Glyph_Black.png"
            alt="instagram logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/stephenie-st-hilaire">
          <img
            className="footer-logo"
            src="src/assets/LI-In-Bug.png"
            alt="linkedin logo"
          />
        </a>
      </p>
    </footer>
  );
}
