import React from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useGetWatchListMovies, useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';
import { TvShowsWatchLists } from '../../types/TVShow';
import { NowShowingTVShow } from '../../types/TVShow';

import './styles.css';

export const TVList: React.FC = () => {
  const { data: tvshows, isLoading, isError } = useGetTVLists();
  const { data: watchlisted } = useGetWatchListMovies();

  if (isLoading) {
    toast.success('Loading tvshows..');
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="green" size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load movies.Please try again');
    return <ClipLoader className="loader-container" color="red" size={100} />;
  }

  const TVShows = tvshows?.results;

  if (TVShows?.length === 0) {
    return <p>No TV shows found.</p>;
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
