import styles from './Teams.module.scss';
import { API_TEAMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc/withErrorApi';
import TeamsCards from './TeamsCards';
import Loader from '../Loader';
import { getDataApiInfo } from '../../network/networkInfo';
import Pagination from '../Pagination';
const Teams = ({ setErrorApi }) => {
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(60);
  const getResurse = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeams(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };
  const pagination = (number) => {
    setCurrentPage(number);
  };
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = teams && teams.slice(indexOfFirstPosts, indexOfLastPosts);
  useEffect(() => {
    getResurse(API_TEAMS);
  }, []);

  return (
    <>
      <div className={styles.teams_block}>
        {teams.length === 0 ? (
          <Loader />
        ) : (
          currentPosts && currentPosts.map((props) => <TeamsCards {...props} key={props.id} />)
        )}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={teams.length} pagination={pagination} />
    </>
  );
};

export default withErrorApi(Teams);
