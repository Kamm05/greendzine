import React from "react";

const useGenerateRandomColor = () => {
  const color = Math.random().toString(16).substr(-6);
  return "#" + color;
};

const ProgressBar = ({ progress, day }) => {
  const Parentdiv = {
    height: 12,
    width: "100%",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress / 2}%`,
    backgroundColor: "#36A54680",
    border: "1px solid #36A546",
    borderRadius: 40,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export default ProgressBar;
