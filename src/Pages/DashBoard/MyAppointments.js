import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContexts } from '../../Contexts/AuthProvider';

const MyAppointments = () => {
    const {user } = useContext(AuthContexts);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const {data:bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async() => {
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            console.log(data);
            return data
        } 
    });
    console.log(bookings);
    if(isLoading){
      return <Loading></Loading>
    }
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.length &&
                bookings?.map((booking, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{booking.name}</td>
                    <td>{booking.treatment} </td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot} </td>
                    <td>
                      {booking.price && !booking.paid && (
                        <Link to={`/dashboard/payment/${booking._id}`}>
                          <button className="btn btn-sm btn-primary">
                            pay
                          </button>
                        </Link>
                      )}
                      ,
                      {booking.price && booking.paid && (
                        <span className="text-primary">paid</span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAppointments;