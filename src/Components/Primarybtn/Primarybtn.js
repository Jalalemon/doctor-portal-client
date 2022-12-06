import React from 'react';

const Primarybtn = ({children}) => {
    return (
      <div>
        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ">{children}</button>
      </div>
    );
};

export default Primarybtn;