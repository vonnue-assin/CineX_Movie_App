import CineXIcon from '../../assets/images/CineXlogo.png';
import { ReactComponent as MenuIcon } from '../../assets/svg/menuIcon.svg';

import './styles.css';
type HeaderProps = {
  onMenuClick: () => void;
};

const Header = () => {
  return (
    <div className="header-body">
      <div className="menuIcon">
        <MenuIcon width={'30px'} height={'30px'} />
      </div>
      <div className="cineX-logo-box">
        <img src={CineXIcon} alt="cineXIcon" className="logo" />
      </div>
    </div>
  );
};

export default Header;
