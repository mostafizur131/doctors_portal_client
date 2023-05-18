import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment;

  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      phone,
      email,
    };

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null); // This line for modal closing
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
                value={date}
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
                defaultValue={user?.displayName}
                disabled
                placeholder="Full Name"
                name="name"
                className="input input-bordered w-full mb-5"
              />
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="Email"
                name="email"
                className="input input-bordered w-full mb-5"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
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
