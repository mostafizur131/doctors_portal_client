import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Terms from "../Terms/Terms";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="md:mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Terms></Terms>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
