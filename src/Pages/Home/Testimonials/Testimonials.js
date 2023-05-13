import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      img: people1,
      name: "Winson Herry",
      place: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: people2,
      name: "Mila Scott",
      place: "Australia",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: people3,
      name: "Olivia Watson",
      place: "Canada",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-16 lg:mt-32 mb-10 px-3">
      <div className="flex justify-between">
        <div>
          <p className="text-secondary text-lg md:text-xl font-bold mb-3">
            Testimonial
          </p>
          <h3 className="text-accent text-4xl font-normal">
            What Our Patients Says
          </h3>
        </div>
        <div>
          <img src={quote} alt="quote" className="w-40" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-7">
        {testimonialData.map((data) => (
          <Testimonial key={data.id} data={data}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
