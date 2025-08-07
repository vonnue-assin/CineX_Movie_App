import React, { useState } from 'react';
import Header from '../Header';
import { MovieGenersList } from '../MovieGenersList';

const MainPage = () => {
  const [showGenres, setShowGenres] = useState(false);

  const handleMenuClick = () => {
    setShowGenres(prev => !prev);
  };

  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
      {showGenres && <MovieGenersList />}
    </div>
  );
};

export default MainPage;
