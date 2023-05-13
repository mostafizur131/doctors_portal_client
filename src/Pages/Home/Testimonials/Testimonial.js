import React from "react";

const Testimonial = ({ data }) => {
  const { img, name, place, description } = data;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-base text-black">{description}</p>
        <div className="flex mt-5">
          <div className="border-4 rounded-full border-secondary">
            <img src={img} alt={name} className="p-1 w-20 h-20" />
          </div>

          <div className="ms-4 mt-3">
            <h3 className="text-xl text-accent font-semibold">{name}</h3>
            <h5 className="text-base text-black">{place}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
