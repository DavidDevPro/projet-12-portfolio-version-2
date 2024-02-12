import React from "react";

const ProjetsDescription = ({ projet }) => {
  // Accepte le projet en tant que prop
  return (
    <div className="page__content">
      <div className="page__content__description">
        <h3>{projet.description}</h3>{" "}
        {/* Utilise le projet pour afficher la description */}
      </div>
    </div>
  );
};

export default ProjetsDescription;
