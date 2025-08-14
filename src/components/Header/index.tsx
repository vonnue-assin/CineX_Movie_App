import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { useGetMovieGenres } from '../../apis/movie/useGetMovieGenres';
import { MovieGenresList } from '../MovieGenersList';

import CineXIcon from '../../assets/images/CineXlogo.png';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

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
        <>
          {isLoading && <ClipLoader size={30} color="red" />}
          {isError && <p>Failed to load genres. Please try again later.</p>}
          {!isLoading && !isError && <MovieGenresList genres={genres ?? []} />}
        </>
      )}
    </div>
  );
};

export default Header;
