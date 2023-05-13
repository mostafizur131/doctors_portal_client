import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="mt-20 mb-10 px-3">
      <div className="text-center mb-7">
        <p className="text-primary text-xl font-bold mb-3">OUR SERVICES</p>
        <h3 className="text-accent text-4xl font-normal">
          Services We Provide
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-7">
        {serviceData.map((data) => (
          <Service key={data.id} data={data}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
