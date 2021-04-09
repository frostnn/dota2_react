import styles from './Pagination.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, pagination }) => {
  const [activePage, setActivePage] = useState(0);
  const addActivePage = (index) => {
    setActivePage(index);
  };
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={styles.pagination_list}>
      {pageNumber.map((number, index) => (
        <li
          className={classNames(
            styles.pagination_list_item,
            activePage === index ? styles.active_page : '',
          )}
          key={number}
          onClick={() => addActivePage(index)}>
          <span className={styles.pagination_list_item_number} onClick={() => pagination(number)}>
            {number}
          </span>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
