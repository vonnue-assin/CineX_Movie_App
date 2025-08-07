import react from 'react';

type NowPlayingMovieCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const NowPlayingMovieCard: React.FC<NowPlayingMovieCardProps> = ({
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
      <h2>{original_title}</h2>
      <p>Original Language: {original_language}</p>
      <p>Rating: {vote_average}</p>
      <p>VoteCount:({vote_count} votes)</p>
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
  );
};
