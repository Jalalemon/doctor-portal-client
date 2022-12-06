import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Primarybtn from '../../Components/Primarybtn/Primarybtn';
const MakeAppointment = () => {
    return (
      <section
        className="mt-20"
        style={{
          background: `url(${appointment})`,
        }}
      >
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              className="lg:w-1/2 -mt-36 rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h3 className="text-lg text-primary font-bold">Appointment</h3>
              <h1 className="text-4xl text-white font-bold">
                Make and appointment today
              </h1>
              <p className=" text-white py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
             <Primarybtn>
                make Apointment
             </Primarybtn>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MakeAppointment;