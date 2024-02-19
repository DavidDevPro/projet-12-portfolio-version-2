import React from "react";
import background from "../assets/img/home.webp";
import background1024 from "../assets/img/home-1024.webp";
import background450 from "../assets/img/home-450.webp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <picture>
        <source media="(min-width: 1024px)" srcSet={background1024} />
        <source media="(min-width: 425px)" srcSet={background450} />
        <img
          src={background}
          alt="image de la page d'accueil"
          loading="lazy"
          sizes="100vw"
        />
      </picture>
      <div className="homePage__container">
        <div className="homePage__container__text">
          <h2>Bonjour,</h2>
          <div className="homePage__container__text__name">
            <h3>Je suis </h3>
            <h4>David</h4>
          </div>
          <h5>Développeur Front-End</h5>
          <Link to="/contact">
            <button>Contactez-moi</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
