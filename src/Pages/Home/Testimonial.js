import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviewss = [
        {
            id: 1,
            name: 'whinsen herry',
            img: people1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore?',
            location: 'CaliFornia'
        },
        {
            id: 2,
            name: 'whinsen herry',
            img: people2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore?',
            location: 'CaliFornia'
        },
        {
            id: 3,
            name: 'whinsen herry',
            img: people3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore?',
            location: 'CaliFornia'
        },
    ]
    return (
      <>
        <div>
          <div>
            <h3 className="text-xl text-primary font-bold"> Testimonial</h3>
            <h2 className="text-4xl">What your passions says</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviewss.map((reviews) => (
            <Review key={reviews.id} reviews={reviews}></Review>
          ))}
        </div>
      </>
    );
};

export default Testimonial;