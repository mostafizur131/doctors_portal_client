import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loding/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/appointments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
