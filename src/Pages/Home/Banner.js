import React from 'react';
import bannerImg from '../../assets/images/chair.png'
import Primarybtn from '../../Components/Primarybtn/Primarybtn';
const Banner = () => {
    return (
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            alt=""
            className=" rounded-lg w-1/2 shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           <Primarybtn> Get started</Primarybtn>
          </div>
        </div>
      </div>
    );
};

export default Banner;