import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";

const BookingModal = ({ treatement,setTreatment, refetch,  selectedDate }) => {
  const { name : treatmentName, slots, price } = treatement;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      passionat: name,
      slot,
      price,
      phone,
      email,
    };
    fetch("http://localhost:5000/bookings", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     if(data.acknowledged){
       setTreatment(null);
       toast.success("booking confirmed");
       refetch();
     }
     else{
      toast.error(data.message)
     }
    })

    // sent data to do server
    // data saved close modal// success toast

console.log(booking);
setTreatment(null)
  }
  const date = format(selectedDate, "PP");
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1"
            action="
          "
          >
            <input
              type="text"
              disabled
              placeholder={date}
              className="input input-bordered input-info w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered input-info w-full "
            />
            <input
              type="text"
              name="email"
              placeholder="Email address"
              className="input input-bordered input-info w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-info w-full "
            />

            <br />
            <input
              className="w-full btn btn-accent"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
