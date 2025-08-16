import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import { useGetPopularPeopleList } from '../../apis/user';
import { routes } from '../../routes';
import Button from '../Button';
import { PopularPeopleCard } from '../PopularPeopleCard';

import { ReactComponent as LeftArrowIcon } from '../../assets/svg/leftArrowIcon.svg';

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
        <ClipLoader color="red" loading={isLoading} size={100} />
      </div>
    );
  }

  if (isError) {
    toast.error('Failed to load popular people. Please try again.');
    return (
      <div className="loader-container">
        <ClipLoader color="red" size={100} />
      </div>
    );
  }

  const people = popularPeopleResponse?.results;

  if (people?.length === 0) {
    return <p>No popular people found.</p>;
  }

  return (
    <>
      <Button
        as="link"
        to={routes.home}
        className="home-page-button"
        variant="primary"
      >
        <span>
          <LeftArrowIcon
            width={'30px'}
            height={'30px'}
            className="left-arrow-icon"
          />
        </span>
        Home
      </Button>

      <h2 className="popular-people-lists-title">Your favourite Artists..</h2>
      <div className="popular-people-container">
        <div className="popular-people-list-container">
          {(people ?? []).map(person => (
            <PopularPeopleCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </>
  );
};
