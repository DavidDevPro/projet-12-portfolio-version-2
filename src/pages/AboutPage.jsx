import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHead from "../components/PageHead";

const AboutPage = () => {
  return (
    <section id="about" className="aboutPage">
      <PageHead
        headerText="A propos de moi"
        icon={<BsInfoCircleFill size={45} />}
      />
    </section>
  );
};

export default AboutPage;
