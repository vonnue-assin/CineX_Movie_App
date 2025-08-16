import './styles.css';

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const starsTotal = 5;
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
