import PropTypes from "prop-types";
import arrow from "../assets/img/arrow.svg";
import { useState } from "react";

const DropList = ({ dropList }) => {
  const [clicked, setClicked] = useState(false);

  const HandleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <div className="dropList__container">
      <div className="dropList__container__headList">
        <h3>{dropList.title}</h3>
        <img
          onClick={HandleToggle}
          src={arrow}
          alt="flèche"
          className={`arrow ${clicked ? "turn" : ""}`}
        />
      </div>
      <div className={`content ${clicked ? "open" : ""}`}>{dropList.text}</div>
    </div>
  );
};

DropList.propTypes = {
  dropList: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default DropList;
