import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Terms = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="lg:w-1/3 rounded-lg shadow-2xl"
          alt="treatment"
        />
        <div className=" mt-16 lg:mt-0 lg:w-1/2 lg:ps-24">
          <h2 className="text-5xl font-bold text-accent">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-6 text-base text-black">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
