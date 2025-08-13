import { useState } from 'react';

import { useGetMovieGenres, useGetWatchListMovies } from '../../apis/movie';
import { MovieGenresList } from '../MovieGenersList';
import { MovieWatchLists } from '../MovieWatchLists';

import CineXIcon from '../../assets/images/CineXlogo.png';
import WatchListIcon from '../../assets/images/watchlists.png';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

import './styles.css';

const Header = () => {
  const [showGenres, setShowGenres] = useState(false);
  const [showWatchListMovies, setShowWatchListMovies] = useState(false);
  const { data: genres, isLoading, isError } = useGetMovieGenres();
  const { data: movies } = useGetWatchListMovies();

  const handleMenuClick = () => {
    setShowGenres(prev => !prev);
  };

  const handleWatchListClick = () => {
    setShowWatchListMovies(prev => !prev);
  };

  return (
    <div className="header-wrapper">
      <div className="header-body">
        <div className="menuIcon" onClick={handleMenuClick}>
          <MenuIcon width={'30px'} height={'30px'} />
        </div>
        <div className="cineX-logo-box">
          <img
            src={WatchListIcon}
            alt="watchListIcon"
            className="watchlistlogo"
            onClick={handleWatchListClick}
          />
          <img src={CineXIcon} alt="cineXIcon" className="logo" />
        </div>
      </div>

      {showGenres && (
        <>
          {isLoading && <p>Loading genres...</p>}
          {isError && <p>Failed to load genres. Please try again later.</p>}
          {!isLoading && !isError && <MovieGenresList genres={genres ?? []} />}
        </>
      )}
      {showWatchListMovies && (
        <>
          {isLoading && <p>Loading Movies..</p>}
          {!isLoading && !isError && <MovieWatchLists movies={movies ?? []} />}
        </>
      )}
    </div>
  );
};

export default Header;
