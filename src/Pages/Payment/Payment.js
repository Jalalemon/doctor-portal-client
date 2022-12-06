import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe('process.env.REACT_APP_STRIPE_KEY');
console.log(stripePromise);

const Payment = () => {
    const bookings = useLoaderData();
    
    return (
      <div>
        <h2 className="text-3xl"> payment for {bookings.treatment} </h2>
        <p className="text-xl">
          please pay <strong> ${bookings.price}</strong> on{" "}
          {bookings.appointmentDate} appointment date on {bookings.slot}{" "}
        </p>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckOutForm bookings={bookings}></CheckOutForm>
          </Elements>
        </div>
      </div>
    );
};

export default Payment;