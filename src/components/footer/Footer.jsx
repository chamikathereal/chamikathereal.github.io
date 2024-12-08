import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Chamika Gayashan</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/chamikathereal"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chamikathereal"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/chamikathereaI"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/chamikathereal"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>

        <a href="https://github.com/chamikathereal" className="footer__copy">
          {/* Chamika Gayashan. All rigths reserved */}
          Copyright ©2024 All rights reserved | Developed by <strong>Chamika Gayashan</strong>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
