import styles from './LogoHeader.module.scss';
import logo from '../../assets/img/dota2_logo_horiz.png';
import { NavLink } from 'react-router-dom';
const LogoHeader = () => {
  return (
    <div className={styles.header_logo}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div>
  );
};

export default LogoHeader;
