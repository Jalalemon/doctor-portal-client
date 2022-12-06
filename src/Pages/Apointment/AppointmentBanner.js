import React, { useState } from "react";
import bannerimg from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
 
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:w-1/2 lg:flex-row-reverse">
        <img
          src={bannerimg}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="mr-6 ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />

        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
