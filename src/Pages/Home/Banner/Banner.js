import React, { useEffect, useState } from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButtons from "../../../Components/PrimaryButtons";
import bannerBg from "../../../assets/images/bg.png";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? bannerBg : "none";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <header
      className="hero lg:py-48"
      style={{
        background: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt="Banner"
        />
        <div>
          <h2 className="text-5xl font-bold text-accent">
            Your New Smile Starts Here
          </h2>
          <p className="py-6 text-base text-accent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButtons>Get Started</PrimaryButtons>
        </div>
      </div>
    </header>
  );
};

export default Banner;
