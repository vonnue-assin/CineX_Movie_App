import React from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';
import { NowShowingTVShow } from '../../types/TVShow';

import './styles.css';

export const TVList: React.FC = () => {
  const { data: tvshows, isLoading, isError } = useGetTVLists();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader loading={isLoading} color="green" size={100} />
      </div>
    );
  }

  if (isError) {
    toast.success('Failed to load movies.Please try again');
    return <ClipLoader className="loader-container" color="red" size={100} />;
  }

  const TVShows = tvshows?.results;

  if (TVShows?.length === 0) {
    return <p>No TV shows found.</p>;
  }

  return (
    <>
      <h2 className="tv-lists-title">Enjoy and Explore the TV Shows...</h2>
      <div className="tv-container">
        <div className="tv-list-container">
          {TVShows?.map((show: NowShowingTVShow) => (
            <TVListCard key={show.id} {...show} />
          ))}
        </div>
      </div>
    </>
  );
};
