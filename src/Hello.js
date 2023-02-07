import React from "react";

const Hello = ({ color, name }) => {
  return <div style={{ color }}>안녕하세요 {name}</div>;
};

Hello.defaultProps = {
  name: "no name",
};

export default Hello;
