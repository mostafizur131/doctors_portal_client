import React from "react";

const InfoCard = ({ data }) => {
  const { name, description, icon, bgClass } = data;
  return (
    <div
      className={`card md:card-side bg-base-100 shadow-xl ${bgClass} text-white p-3 md:p-5 text-center`}
    >
      <figure>
        <img src={icon} alt={name} />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
