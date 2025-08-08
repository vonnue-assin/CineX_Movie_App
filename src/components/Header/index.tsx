import React, { useState } from 'react';
import CineXIcon from '../../assets/images/CineXlogo.png';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

import { useGetMovieGenres } from '../../apis/movie/useGetMovieGenres';
import { MovieGenersCard } from '../MovieGenersCard';

import './styles.css';

const Header = () => {
  const [showGenres, setShowGenres] = useState(false);
  const { data: genres, isLoading, isError } = useGetMovieGenres();

  const handleMenuClick = () => {
    setShowGenres(prev => !prev);
  };

  return (
    <div className="header-wrapper">
      <div className="header-body">
        <div className="menuIcon" onClick={handleMenuClick}>
          <MenuIcon width={'30px'} height={'30px'} />
        </div>
        <div className="cineX-logo-box">
          <img src={CineXIcon} alt="cineXIcon" className="logo" />
        </div>
      </div>

      {showGenres && (
        <div className="genres-container">
          {isLoading && <p>Loading genres...</p>}
          {isError && <p>Failed to load genres. Please try again later.</p>}
          {!isLoading && !isError && (genres ?? []).length > 0 && (
            (genres ?? []).map(genre => (
              <MovieGenersCard key={genre.id} id={genre.id} name={genre.name} />
            ))
          )}
          {!isLoading && !isError && (genres ?? []).length === 0 && (
            <p>No genres available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
