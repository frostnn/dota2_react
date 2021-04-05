/* import styles from './LogoHeader.module.scss'; */
import logo from '../../assets/img/dota_logo.svg';
const LogoHeader = () => {
  return (
    <div>
      <img src={logo} alt="" width="80" />
    </div>
  );
};

export default LogoHeader;
