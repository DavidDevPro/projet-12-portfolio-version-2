import React from "react";
import { BiLogoDevTo } from "react-icons/bi";
import PageHead from "../components/PageHead";

const Competences = () => {
  return (
    <section id="competences" className="competencesPage">
      <PageHead headerText="Mes compétences" icon={<BiLogoDevTo size={45} />} />
    </section>
  );
};

export default Competences;
