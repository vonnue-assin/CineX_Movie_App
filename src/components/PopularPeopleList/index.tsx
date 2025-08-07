import React from 'react';
import { toast } from 'react-toastify';

import { useGetPopularPeopleList } from '../../apis/movie';
import { PopularPeopleCard } from '../PopularPeopleCard';

import './styles.css';

export const PopularPeopleList = () => {
  const { data: people, isLoading, isError } = useGetPopularPeopleList();

  if (isLoading) {
    toast.info('Loading popular people...');
    return <p>Loading...</p>;
  }

  if (isError) {
    toast.error('Failed to load popular people. Please try again.');
    return <p>Error loading data.</p>;
  }

  if (!people || people.length === 0) {
    return <p>No popular people found.</p>;
  }

  return (
    <>
      <h2 className="now-playing-movie-lists-title">Enjoy and Explore...</h2>
      <div className="now-playing-movie-container">
        <div className="now-playing-movie-list-container">
          {people.map(person => (
            <PopularPeopleCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </>
  );
};
