import { MovieGenersList } from '../../components/MovieGenersList';
import Header from '../../components/Header';
import { toast } from 'react-toastify';

export const Home = () => {
  return (
    <>
      <Header />
      <MovieGenersList />
    </>
  );
};
