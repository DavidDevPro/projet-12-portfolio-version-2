import React from "react";
import background from "../assets/img/homeBackground.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <img src={background} alt="image de la page d'accueil" />
      <div className="homePage__container">
        <div className="homePage__container__text">
          <h2>Bonjour,</h2>
          <div className="homePage__container__text__name">
            <p>Je suis </p>
            <span>David</span>
          </div>
          <p>Développeur Front-End</p>
          <Link to="/contact">
            <button>Contactez-moi</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
