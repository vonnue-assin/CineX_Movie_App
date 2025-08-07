import { MovieGenersList } from '../../components/MovieGenersList';
import Header from '../../components/Header';
import { toast } from 'react-toastify';

export const Home = () => {
  return (
    <>
      <Header onMenuClick={() => toast.success('See the movie geners')} />
      <MovieGenersList />
    </>
  );
};
