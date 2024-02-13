import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__copyright">
          <p>2024 © David Changea. Tous droits réservés.</p>
        </div>
        <div className="footer__container__iconsContainer">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer__container__iconsContainer__icon"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-changea-440a7945/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            className="footer__container__iconsContainer__icon"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.facebook.com/veday.shop/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__container__iconsContainer__icon"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://github.com/david-backup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="footer__container__iconsContainer__icon"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:14ir155@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envoyer un message"
            className="footer__container__iconsContainer__icon"
          >
            <TfiEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
