import PropTypes from "prop-types";

const Tags = ({ text }) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};
Tags.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tags;
