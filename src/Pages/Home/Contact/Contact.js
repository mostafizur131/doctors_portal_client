import React from "react";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="mt-16 lg:mt-32 mb-10 py-10"
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="text-center">
        <p className="text-secondary text-xl md:text-xl font-bold mb-3">
          Contact Us
        </p>
        <h3 className="text-white text-2xl lg:text-4xl font-normal">
          Stay connected with us
        </h3>
      </div>
      <div className="flex items-center justify-center text-center text-accent">
        <form className="flex flex-col w-full max-w-lg p-12 text-accent">
          <input
            id="email"
            type="text"
            placeholder="Email Address"
            className="input mt-2 focus:outline-none"
          />
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            className="input mt-4 focus:outline-none"
          />
          <textarea
            className="textarea mt-4 focus:outline-none"
            placeholder="Your Message"
          ></textarea>
          <div>
            <button
              type="submit"
              className="mt-5 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
