import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
      {
        id: 1,
        name: "opening Hours",
        dec: "Open 9:00 am to 5:am open everyday",
        icon: clock,
        bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        id: 2,
        name: "visit our location",
        dec: "Open 9:00 am to 5:am open everyday",
        icon: marker,
        bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
      {
        id: 3,
        name: "contuct us",
        dec: "018375049663",
        icon: phone,
        bgClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
      },
    ];
    return (
        <div className='grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2'>
            {
                cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
            
        </div>
    );
};

export default InfoCards;