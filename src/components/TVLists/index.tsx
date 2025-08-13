import React from 'react';
import { toast } from 'react-toastify';

import { useGetWatchListMovies, useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';
import { TvShowsWatchLists } from '../../types/TVShow';

import './styles.css';

export const TVList: React.FC = () => {
  const { data: tvshows, isLoading, isError } = useGetTVLists();
  const { data: watchlisted } = useGetWatchListMovies();

  if (isLoading) {
    toast.success('Loading tvshows..');
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
  }

  if (isLoading || !tvshows) return <div>Loading...</div>;

  return (
    <>
      <h2 className="tv-lists-title">Enjoy and Explore the TV Shows...</h2>
      <div className="tv-container">
        <div className="tv-list-container">
          {tvshows.map((shows: TvShowsWatchLists) => (
            <TVListCard
              key={shows.id}
              {...shows}
              isWatchList={watchlisted?.some(
                (watchlist: { id: number }) => watchlist.id === shows.id,
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};
