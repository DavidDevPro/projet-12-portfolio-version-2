import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHead from "../components/PageHead";
import personal from "../data/personal.json";
import { DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";

const AboutPage = () => {
  const details =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis sunt saepe! Voluptatibus est aliquam at magnam, officia reiciendis tempora iste veritatis maiores in quis veniam animi commodi ad, nisi deserunt ratione ducimus, cupiditate sit voluptatum? Neque, officia consequatur nihil hic vel praesentium minima laborum aut earum culpa, ipsam veniam in iure ipsa maxime soluta quis atque eos reprehenderit tempore asperiores dolore repellat. Veniam nostrum magni ratione beatae perspiciatis sapiente nihil hic, dignissimos quos. Labore nesciunt, obcaecati deserunt voluptatum odit sunt amet quia magni necessitatibus ullam, iure omnis sed nobis aliquam dolores eaque? Ipsa minus dignissimos facere veritatis sint quis";

  return (
    <section id="about" className="aboutPage">
      <PageHead
        headerText="A propos de moi"
        icon={<BsInfoCircleFill size={45} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Développeur Front-End</h3>
          <p>{details}</p>

          <h3 className="personalInformationHeaderText">
            Informations personnelles
          </h3>
          <ul>
            {personal.map((item, index) => (
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <DiSass size={60} />
            </div>
            <div>
              <FaReact size={60} />
            </div>
            <div>
              <FaGithub size={60} />
            </div>
            <div>
              <FaDev size={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
