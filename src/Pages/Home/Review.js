import React from "react";

const Review = ({ reviews }) => {
  const { location, img, name, review, id } = reviews;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
      </div>
      <div className="avatar">
        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} />
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Review;
