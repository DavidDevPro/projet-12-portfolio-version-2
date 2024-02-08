import React from "react";
import { BsMouse3 } from "react-icons/bs";
import PageHead from "../components/PageHead";

const Projets = () => {
  return (
    <section id="projets" className="projetsPage">
      <PageHead headerText="Mes projets" icon={<BsMouse3 size={45} />} />
    </section>
  );
};

export default Projets;
