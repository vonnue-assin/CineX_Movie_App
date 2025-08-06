import Header from '../../components/Header';
import { MovieListCard } from '../../components/MovieListCard';

import './styles.css';

export const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <MovieListCard />
    </div>
  );
};
