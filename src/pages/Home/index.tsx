import Header from '../../components/Header';
import { MovieListSection } from '../../components/MovieLists';

import './styles.css';

export const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <MovieListSection />
    </div>
  );
};
