import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { useGetMovieGenres } from '../../apis/movie/useGetMovieGenres';
import { MovieGenresList } from '../MovieGenersList';

import CineXIcon from '../../assets/images/CineXlogo.png';

import './styles.css';

const Header = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  const { data: genres, isLoading, isError } = useGetMovieGenres();

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowGenres(false);
    }
  };

  const handleSelectGenre = (genreId: number | null) => {
    setSelectedGenreId(genreId);
    setShowGenres(false);
  };

  return (
    <div className="header-wrapper" tabIndex={0} onBlur={handleBlur}>
      <div className="header-body">
        <div className="cineX-logo-box">
          <img src={CineXIcon} alt="CineX Logo" className="logo" />
        </div>
      </div>

      {showGenres && (
        <div className="genres-dropdown">
          {isLoading && <ClipLoader size={30} color="red" />}
          {isError && (
            <p className="error-text">
              Failed to load genres. Please try again later.
            </p>
          )}
          {!isLoading && !isError && (
            <MovieGenresList
              genres={genres ?? []}
              selectedGenreId={selectedGenreId}
              onSelectGenre={handleSelectGenre}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
