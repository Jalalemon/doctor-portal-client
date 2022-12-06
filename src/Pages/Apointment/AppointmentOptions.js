import React from 'react';

const AppointmentOptions = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="card text-center w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center text-cyan-300 ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length}
          {slots.length > 1 ? "spaces" : "space"}
        </p>
        <p>price: ${price} </p>
        <div className="card-actions justify-center">
          <label
          disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            
            className="btn btn text-white bg-cyan-400"
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;