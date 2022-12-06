import React from 'react';
import fluride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Flouride tratment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nemo asperiores perspiciati',
            img: fluride
        },
        {
            id: 2,
            name: 'cavity falling',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nemo asperiores perspiciati',
            img: cavity,
        },
        {
            id: 3,
            name: ' teeth whitening ',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nemo asperiores perspiciati',
            img: whitening,
        },
    ]
    return (
      <div className="mt-6">
        <div>
          <h2 className="text-xl font-bold text-primary uppercase">
            our services
          </h2>
          <h2 className="text-3xl"> services we provide </h2>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                servicesData.map(service => <Service key={service.id} service={service} ></Service> )
            }
        </div>
      </div>
    );
};

export default Services;