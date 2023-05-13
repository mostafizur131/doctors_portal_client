import React from "react";

const PrimaryButtons = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButtons;
