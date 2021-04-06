/* import styles from './LogoHeader.module.scss'; */
import { NavLink } from 'react-router-dom';

const MenuHeader = () => {
  const menuArr = [
    { title: 'Leagues', link: '/leagues' },
    { title: 'Heroes', link: '/heroes' },
    { title: 'Items', link: '/items' },
    { title: 'Matches', link: '/matches' },
    { title: 'Players', link: '/players' },
    { title: 'Teams', link: '/teams' },
  ];
  return (
    <div>
      <ul>
        {menuArr.length &&
          menuArr.map(({ title, link }, i) => (
            <li key={`${title}_${i}`}>
              <NavLink to={link}>{title}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenuHeader;
