import React from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useGetFavouriteTvShows, useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';
import { NowShowingTVShow } from '../../types/TVShow';

import './styles.css';

export const TVList: React.FC = () => {
  const { data: tvShowsData, isLoading, isError } = useGetTVLists();
  const { data: favoriteTvShowsData } = useGetFavouriteTvShows();

  if (isLoading) {
    toast.success('Loading TV shows...');
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="green" size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load TV shows. Please try again.');
    return <ClipLoader className="loader-container" color="red" size={100} />;
  }

  const tvShows: NowShowingTVShow[] = tvShowsData?.results || [];
  const favoriteShowsList: NowShowingTVShow[] =
    favoriteTvShowsData?.results || [];

  if (tvShows.length === 0) {
    return <p>No TV shows found.</p>;
  }

  return (
    <>
      <h2 className="tv-lists-title">Enjoy and Explore the TV Shows...</h2>
      <div className="tv-container">
        <div className="tv-list-container">
          {tvShows.map((show: NowShowingTVShow) => (
            <TVListCard
              key={show.id}
              {...show}
              isFavorite={favoriteShowsList.some(fav => fav.id === show.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
