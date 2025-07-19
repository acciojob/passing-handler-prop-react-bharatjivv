import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [bgStyle, setBgStyle] = useState({});

  const handleClick = () => {
    applyColor(setBgStyle);
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={bgStyle}
    ></div>
  );
};

export default Selection;