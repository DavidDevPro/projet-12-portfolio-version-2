import React from "react";
import background from "../assets/img/home.jpg";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <img
        src={background}
        alt="image de la page d'accueil"
        loading="easer"
        sizes="100vw"
      />

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
