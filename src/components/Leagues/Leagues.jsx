import styles from './Leagues.module.scss';
import { API_LEAGUES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Pagination from '../Pagination';
import Search from '../Search';

const Leagues = ({ setErrorApi }) => {
  const [leagues, setLeagues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setLeagues(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };
  const pagination = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    getResurse(API_LEAGUES);
  }, []);
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = leagues && leagues.slice(indexOfFirstPosts, indexOfLastPosts);

  return (
    <React.Fragment>
      {<Search />}
      <div className={styles.leagues_block}>
        {leagues.length &&
          currentPosts.map(({ id, name, image_url }) => (
            <div className={styles.leagues_block_item} key={id}>
              <div className={styles.leagues_block_item_img}>
                {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
              </div>
              <div className={styles.leagues_block_item_title}>
                {name.replace(/_/g, ' ').toUpperCase()}
              </div>
            </div>
          ))}
      </div>
      {
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={leagues.length}
          pagination={pagination}
        />
      }
    </React.Fragment>
  );
};

export default withErrorApi(Leagues);
