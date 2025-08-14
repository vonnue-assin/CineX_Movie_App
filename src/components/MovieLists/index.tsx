import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useGetMovieList } from '../../apis/movie';
import { MovieListCard } from '../MovieListCard';

import './styles.css';

export const MovieList = () => {
  const { data: movieData, isLoading, isError } = useGetMovieList();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="red" size={60} />
      </div>
    );
  }

  if (isError) {
    return <p>Failed to load movies.Please try again</p>;
    
  }

  const movies = movieData?.results;
  
  if (movies?.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore....</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {(movies ?? []).map(movie => (
            <MovieListCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};
