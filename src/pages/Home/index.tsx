import { toast } from 'react-toastify';

import Header from '../../components/Header';
import { TopMovieList } from '../../components/TopMoviesLists';

export const Home = () => {
  return (
    <>
      <Header onMenuClick={() => toast.success('See the movie geners')} />
      <TopMovieList />
    </>
  );
};
