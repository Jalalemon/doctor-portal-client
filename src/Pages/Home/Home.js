import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;