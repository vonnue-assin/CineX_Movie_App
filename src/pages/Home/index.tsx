import Header from '../../components/Header';
import { UserList } from '../../components/UserList';

import './styles.css';

export const Home = () => {
  return (
    <div className="home-body">
      <Header />
      <UserList />
    </div>
  );
};
