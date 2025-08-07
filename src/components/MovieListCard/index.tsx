import React from 'react';

type MovieListCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const starsTotal = 5;
  const filledStars = Math.round(rating / 2);
  const emptyStars = starsTotal - filledStars;

  return (
    <div>
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

export const MovieListCard: React.FC<MovieListCardProps> = ({
  backdrop_path,
  original_language,
  original_title,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}) => {
  return (
    <div>
      <div className="movieList-details-card">
        <h2>{original_title}</h2>
        <p>Original Language: {original_language}</p>
        <p>
          Rating: <StarRating rating={vote_average} />
        </p>
        <p>Vote Count: ({vote_count} votes)</p>
        <p>Release Date: {release_date}</p>
        <p>Popularity: {popularity}</p>

        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} poster`}
          />
        )}
        {backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            alt={`${title} backdrop`}
          />
        )}

        {video && <p>🎬 Video Available</p>}
      </div>
    </div>
  );
};
