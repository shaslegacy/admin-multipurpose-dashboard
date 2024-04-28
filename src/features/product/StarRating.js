import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="mdi mdi-star text-warning"></span>);
    } else {
      stars.push(<span key={i} className="mdi mdi-star"></span>);
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
};

export default StarRating;