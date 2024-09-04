import "../components/Footer.css";
import React from "react";
import Image from "react-bootstrap/Image";
import instagram from "../assets/Instagram_Glyph_Black.png";
import linkedin from "../assets/LI-In-Bug.png";
import github from "../assets/github-mark.png";

export default function Footer() {
  return (
    <footer className="container-footer">
      <p>
        <a href="https://github.com/iamthesaint">
          <Image
            className="footer-logo"
            src={github}
            alt="github logo"
          />
        </a>
        <a href="https://www.instagram.com/iamthesaint/">
          <Image
            className="footer-logo"
            src={instagram}
            alt="instagram logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/stephenie-st-hilaire">
          <Image
            className="footer-logo"
            src={linkedin}
            alt="linkedin logo"
          />
        </a>
      </p>
    </footer>
  );
}
