import { toast } from 'react-toastify';

import { useGetPopularPeopleList } from '../../apis/user';
import { PopularPeopleCard } from '../PopularPeopleCard';

import './styles.css';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

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
      <button className="home-page-button">
        <Link
          to={routes.home}
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
            fontFamily: 'bold-poppins-font',
          }}
        >
          <span> ←</span> Home
        </Link>
      </button>

      <h2 className="popular-people-lists-title">Your favourite Artists..</h2>
      <div className="popular-people-container">
        <div className="popular-people-list-container">
          {people.map(person => (
            <PopularPeopleCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </>
  );
};
