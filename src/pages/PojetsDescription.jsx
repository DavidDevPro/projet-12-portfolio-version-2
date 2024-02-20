import React from "react";

const ProjetsDescription = ({ projet }) => {
  // Accepte le projet en tant que prop
  return (
    <div className="page__content">
      <div className="page__content__description">
        <h3>{projet.description}</h3>{" "}
      </div>
    </div>
  );
};

export default ProjetsDescription;
