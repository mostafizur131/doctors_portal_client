import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
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
          <label
            onClick={() => setTreatment(option)}
            disabled={slots.length === 0}
            htmlFor="booking_modal"
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white uppercase hover:bg-gradient-to-l border-0 "
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
