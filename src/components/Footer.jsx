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
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter"
            className="footer__container__iconsContainer__icon"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/david-changea-440a7945/"
            target="_blank"
            rel="noopener noreferrer"
            alt="linkedin"
            className="footer__container__iconsContainer__icon"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="https://www.facebook.com/veday.shop/?locale=fr_FR"
            target="_blank"
            rel="noopener noreferrer"
            alt="facebook"
            className="footer__container__iconsContainer__icon"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://github.com/david-backup"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            className="footer__container__iconsContainer__icon"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            to="mailto:14ir155@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            alt="envoyer un message"
            className="footer__container__iconsContainer__icon"
          >
            <TfiEmail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
