import styles from './Leagues.module.scss';
import { API_LEAGUES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Pagination from '../Pagination';
import Search from '../Search';
import LeaguesCards from './LeaguesCards/LeaguesCards';

const Leagues = ({ setErrorApi }) => {
  const [leagues, setLeagues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [search, setSearch] = useState('');
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
    console.log(leagues);
  }, []);
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = leagues && leagues.slice(indexOfFirstPosts, indexOfLastPosts);

  return (
    <React.Fragment>
      <Search setSearch={setSearch} />
      <div className={styles.leagues_block}>
        {search
          ? leagues
              .filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((props, i) => <LeaguesCards {...props} key={i} />)
          : currentPosts.map((props, i) => <LeaguesCards {...props} key={i} />)}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={leagues.length} pagination={pagination} />
    </React.Fragment>
  );
};

export default withErrorApi(Leagues);
