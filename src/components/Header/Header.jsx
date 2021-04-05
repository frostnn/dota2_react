import Wrapper from '../../containers/Wrapper';
import styles from './Header.module.scss';
import LogoHeader from '../LogoHeader/LogoHeader';
import MenuHeader from '../MenuHeader/MenuHeader';

const Header = () => {
  return (
    <header className={styles.header_nav}>
      <Wrapper>
        <div className={styles.header_nav_content}>
          <LogoHeader />
          <MenuHeader />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
