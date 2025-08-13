import React from 'react';

type StarRatingProps = {
  rating: number;
  starsTotal?: number;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  starsTotal = 5,
}) => {
  const filledStars = Math.round(rating / 2);
  const emptyStars = starsTotal - filledStars;

  return (
    <div className="star-rating">
      {Array.from({ length: filledStars }, (_, i) => (
        <span key={`filled-${i}`} style={{ color: '#FFD700' }}>
          ★
        </span>
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={`empty-${i}`} style={{ color: '#ccc' }}>
          ☆
        </span>
      ))}
    </div>
  );
};
