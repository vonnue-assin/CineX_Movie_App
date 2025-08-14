import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetPopularPeopleList } from '../../apis/user';
import { routes } from '../../routes';
import { PopularPeopleCard } from '../PopularPeopleCard';

import './styles.css';

export const PopularPeopleList = () => {
  const {
    data: popularPeopleResponse,
    isLoading,
    isError,
  } = useGetPopularPeopleList();

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="red" loading={isLoading} size={60} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load popular people. Please try again.');
    return <p>Error loading data.</p>;
  }
  const people = popularPeopleResponse?.results;

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
