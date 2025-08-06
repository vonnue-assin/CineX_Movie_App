import './styles.css';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

const Header = () => {
  return (
    <div className="header-body">
      <div className="menuIcon">
        <MenuIcon width={'30px'} height={'30px'} />
      </div>
      <div className="cineX-logo-box">
        <span className="cinex-logo">CineX</span>
      </div>
    </div>
  );
};

export default Header;
