import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHead from "../components/PageHead";
import { useParams } from "react-router-dom";
import Projets from "../data/projets.json";

const ProjetsContent = () => {
  const { id } = useParams();
  const projet = Projets.find((item) => item.pageId === id);
  console.log(id);

  return (
    <div id="project__content__page" className="project__content__page">
      <PageHead
        headerText="Détails du projet"
        icon={<BsInfoCircleFill size={45} />}
      />
      <div className="page__container">
        <img
          className="page__container__img"
          src={projet.picture}
          alt={`image du ${projet.title}`}
        />
      </div>
    </div>
  );
};

export default ProjetsContent;
