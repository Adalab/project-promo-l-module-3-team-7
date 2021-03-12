//import "../style/App.scss";
import React from "react";
import logoAdalab from "../images/logo-adalab.png";
import "../style/layout/Footer.scss";

function Footer() {
    return (
      <footer className="footer">
        <h2 className="footer__text">Awesome profile-cards @2021</h2>
        <a href="https://adalab.es/" target="__blank">
          <img
            src={logoAdalab}
            className="footer__adalab-logo"
            alt="Adalab home logo link"
            title="Adalab logo"
          />
        </a>
      </footer>
    );
}

export default Footer;