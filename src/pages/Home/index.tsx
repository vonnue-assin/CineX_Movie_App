import Header from '../../components/Header';
import { MovieList } from '../../components/MovieLists';

import './styles.css';

export const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <MovieList />
    </div>
  );
};
