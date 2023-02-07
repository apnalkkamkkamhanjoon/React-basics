import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}안녕하세요 {name}
    </div>
  );
};

Hello.defaultProps = {
  name: "no name",
};

export default Hello;
