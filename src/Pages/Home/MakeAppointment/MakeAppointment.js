import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButtons from "../../../Components/PrimaryButtons";

const MakeAppointment = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${appointment})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
      }}
    >
      <div className="hero text-white relative my-10 lg:my-20 py-10 lg:py-8 xl:py-16">
        <div className="hero-content flex-col lg:flex-row">
          <div className="hidden lg:block lg:w-1/2">
            <img
              src={doctor}
              className="w-[700px] h-[600px] absolute lg:-top-[136px] lg:-left-[106px] xl:-top-[160px] xl:-left-[20px]"
              alt="Doctor"
            />
          </div>
          <div className="lg:w-1/2 ">
            <h4 className="text-xl font-bold text-secondary mb-5">
              Appointment
            </h4>
            <h2 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h2>
            <p className="py-6 text-base text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButtons>Get Started</PrimaryButtons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
