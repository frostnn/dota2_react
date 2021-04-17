import styles from './Leagues.module.scss';
import { API_LEAGUES } from '../../constants/const';
import React, { useContext, useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Pagination from '../Pagination';
import Search from '../Search';
import LeaguesCards from './LeaguesCards/LeaguesCards';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

const Leagues = ({ setErrorApi }) => {
  const [leagues, setLeagues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(true);
  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setLeagues(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  const sortName = () => {
    const copyState = [...leagues];
    if (setSort(!sort)) {
      copyState.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    } else {
      copyState.reverse((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      return setLeagues(copyState);
    }
  };
  const pagination = (number) => {
    setCurrentPage(number);
  };
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = leagues && leagues.slice(indexOfFirstPosts, indexOfLastPosts);
  useEffect(() => {
    getResurse(API_LEAGUES);
    console.log(leagues);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.change_panel}>
        <SortByAlphaIcon onClick={() => sortName()} />
        <Search setSearch={setSearch} />
      </div>
      <div className={styles.leagues_block}>
        {search
          ? leagues
              .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
              .map((props, i) => <LeaguesCards {...props} key={i} />)
          : currentPosts && currentPosts.map((props, i) => <LeaguesCards {...props} key={i} />)}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={leagues.length} pagination={pagination} />
    </React.Fragment>
  );
};

export default withErrorApi(Leagues);
