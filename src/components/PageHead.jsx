import React from "react";

const PageHead = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="pageHead">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHead;
