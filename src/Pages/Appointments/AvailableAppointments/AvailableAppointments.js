import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/appointments");
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:8000/appointments")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="lg:mt-10 px-3">
      <p className="text-secondary text-2xl text-center mb-5">
        Available Services on {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
