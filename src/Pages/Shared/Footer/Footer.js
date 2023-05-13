import React, { useEffect, useState } from "react";
import footerImg from "../../../assets/images/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? footerImg : "none";
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
    <footer
      className="px-10 py-14 bg-white text-accent"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="container grid grid-cols-1 mx-auto gap-x-3 gap-y-8  md:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-gray-400">SERVICES</h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <Link to="/">Emergency Checkup</Link>
            <Link to="/">Monthly Checkup</Link>
            <Link to="/">Weekly Checkup</Link>
            <Link to="/">Deep Checkup</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-gray-400">ORAL HEALTH</h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <Link to="/">Fluoride Treatment</Link>
            <Link to="/">Cavity Filling</Link>
            <Link to="/">Teeth Whitening</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium text-gray-400">OUR ADDRESS</h2>
          <div className="flex flex-col space-y-2 text-sm ">
            <Link to="/">New York - 101010 Hudson</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-400">
          © Copyright 2023. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
