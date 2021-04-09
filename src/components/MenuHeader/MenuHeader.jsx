import styles from './MenuHeader.module.scss';
import { NavLink } from 'react-router-dom';

const MenuHeader = () => {
  const menuArr = [
    { title: 'Leagues', link: '/leagues' },
    { title: 'Heroes', link: '/heroes' },
    { title: 'Items', link: '/items' },
    { title: 'Matches', link: '/matches' },
    { title: 'Players', link: '/players' },
    { title: 'Teams', link: '/teams' },
    { title: 'Live', link: '/live' },
  ];
  return (
    <div className={styles.header_menu}>
      <nav className={styles.header_nav}>
        <ul className={styles.header_nav_list}>
          {menuArr.length &&
            menuArr.map(({ title, link }, i) => (
              <li key={`${title}_${i}`} className={styles.header_nav_list_item}>
                <NavLink to={link} activeClassName={styles.header_nav_list_item_active}>
                  {title}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuHeader;
