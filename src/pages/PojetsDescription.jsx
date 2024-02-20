import React from "react";

const ProjetsDescription = ({ projet }) => {
  // Accepte le projet en tant que prop
  return (
    <div className="page__content">
      <h3>{projet.description}</h3>
      <div className="page__content__description">
        <div className="page__content__description__firstContainer">
          <img
            src={projet.pictures[0].picture1}
            alt={`image 1 du ${projet.title}`}
          />
          <div className="page__content__description__firstContainer__text">
            <h4>{projet.pictures[0].title1}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetsDescription;
