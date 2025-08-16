import Header from '../../components/Header';
import { MovieList } from '../../components/MovieLists';

export const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <MovieList />
    </div>
  );
};
