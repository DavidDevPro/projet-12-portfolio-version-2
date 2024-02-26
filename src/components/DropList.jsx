import PropTypes from "prop-types";
import arrow from "../assets/img/arrow.svg";
import { useState } from "react";
import { FaHandPointRight } from "react-icons/fa";

const DropList = ({ title, text1, text2, lien }) => {
  const [clicked, setClicked] = useState(false);

  const HandleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <div className="dropList__container">
      <div className="dropList__container__headList">
        <h3>{title}</h3>
        <img
          onClick={HandleToggle}
          src={arrow}
          alt="flèche"
          className={`arrow ${clicked ? "turn" : ""}`}
        />
      </div>
      <div className={`content ${clicked ? "open" : ""}`}>
        <p>{text1}</p>
        <p>{text2}</p>
        <div className="linkGitHub">
          <span>
            <FaHandPointRight className="faHand" />
          </span>
          <a
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="dropList_link"
          >
            Lien du repo GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

DropList.propTypes = {
  title: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  lien: PropTypes.string,
};
export default DropList;
