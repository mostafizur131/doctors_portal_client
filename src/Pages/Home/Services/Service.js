import React from "react";

const Service = ({ data }) => {
  const { img, title, description } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h4 className="card-title text-xl font-semibold text-accent ">
          {title}
        </h4>
        <p className="text-base text-black">{description}</p>
      </div>
    </div>
  );
};

export default Service;
