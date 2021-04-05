/* import styles from './LogoHeader.module.scss'; */
import { NavLink } from 'react-router-dom';

const MenuHeader = () => {
  const menuArr = [
    { title: 'Menu 1', link: '/roster1' },
    { title: 'Menu 2', link: '/roster2' },
    { title: 'Menu 3', link: '/roster3' },
    { title: 'Heroes', link: '/heroes' },
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
