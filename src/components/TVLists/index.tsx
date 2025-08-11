import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useGetTVLists } from '../../apis/TV';
import { TVListCard } from '../TVListCard';
import { TVShow } from '../../types/TVShow';

import './styles.css';

export const TVList: React.FC = () => {
  const { data: tvshows, isLoading, isError } = useGetTVLists();

  useEffect(() => {
    if (isLoading) {
      toast.info('Loading TV shows...');
    }

    if (isError) {
      toast.error('Failed to load TV shows. Please try again.');
    }
  }, [isLoading, isError]);

  if (!tvshows || tvshows.length === 0) {
    return <p>No TV shows found.</p>;
  }

  return (
    <>
      <h2 className="tv-lists-title">Enjoy and Explore the TV Shows...</h2>
      <div className="tv-container">
        <div className="tv-list-container">
          {tvshows.map((show: TVShow) => (
            <TVListCard key={show.id} {...show} />
          ))}
        </div>
      </div>
    </>
  );
};
