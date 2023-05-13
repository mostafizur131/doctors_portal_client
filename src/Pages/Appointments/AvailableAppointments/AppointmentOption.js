import React from "react";
import PrimaryButtons from "../../../Components/PrimaryButtons";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-lg border-2 border-gray-100">
      <div className="card-body text-center">
        <h2 className="text-xl text-secondary font-semibold">{name}</h2>
        <p className="text-base text-black">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </p>
        <p className="text-base text-black">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="mt-2">
          <PrimaryButtons>Book Appointment</PrimaryButtons>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
