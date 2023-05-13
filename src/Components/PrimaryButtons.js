import React from "react";

const PrimaryButtons = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase hover:bg-gradient-to-l border-0 ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButtons;
