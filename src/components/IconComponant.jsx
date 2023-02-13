import React from "react";

const IconComponant = ({ icon }) => {
  return (
    <div className="icon_componant">
      <img src={icon.icon} alt={icon.name} />
    </div>
  );
};

export default IconComponant;
