import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      // appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      phone,
      email,
    };
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="mt-5">
            <form onSubmit={handleBooking}>
              <input
                type="text"
                value={format(selectedDate, "pp")}
                disabled
                className="input input-bordered w-full mb-5 "
              />
              <select
                name="slot"
                className="select select-bordered w-full mb-5 bg-neutral border-neutral"
              >
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered w-full mb-5"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="input input-bordered w-full mb-5"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full mb-5"
              />
              <input
                type="submit"
                value="Submit"
                className="btn bg-accent hover:bg-neutral text-white bordered hover:border-neutral hover:text-accent w-full mb-5"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
