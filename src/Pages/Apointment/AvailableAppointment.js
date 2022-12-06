import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate, setSelectedDate}) => {
    // const [appointOptions, setAppointmentsOptions] = useState([]);
    const [treatement, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    

    const {data: appointOptions = [], refetch , isLoading} =useQuery({
      queryKey: ['appointmentOptions', date],
      queryFn: async () =>{
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
        const data = await res.json();
        return data
      }
    }) ;
    if(isLoading){
      return <Loading></Loading>
    }
    // useEffect(() =>{
    //     fetch('appointmentOptions.json')
    //     .then(res => res.json())
    //     .then(data => setAppointmentsOptions(data))
    // }, []);
    return (
      <section className="text-center text-primary">
        <p> available appointment on {format(selectedDate, "PP")} </p>
        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2">
          {appointOptions.map((option) => (
            <AppointmentOptions
              option={option}
              key={option._id}
              setTreatment={setTreatment}
            ></AppointmentOptions>
          ))}
        </div>
        {treatement && (
          <BookingModal
            treatement={treatement}
            setTreatment={setTreatment}
            refetch={refetch}
            selectedDate={selectedDate}
          ></BookingModal>
        )}
      </section>
    );
};

export default AvailableAppointment;