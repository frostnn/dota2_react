import styles from './Players.module.scss';
import { API_PLAYERS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Loader from '../Loader';
import Pagination from '../Pagination';

const Players = ({ setErrorApi }) => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = players && players.slice(indexOfFirstPosts, indexOfLastPosts);
  const pagination = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    fetch('https://api.opendota.com/api/proPlayers')
      .then((resp) => resp.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <React.Fragment>
      {players.length === 0 ? (
        <Loader />
      ) : (
        currentPosts.map(({ account_id, name, avatarmedium, team_name }) => (
          <div className={styles.Players_item} key={account_id}>
            {avatarmedium ? <img src={`${avatarmedium}`} alt={name} /> : 'NO IMG :('}
            <h1>{name}</h1>
            <div>{team_name ? team_name : 'no('}</div>
          </div>
        ))
      )}
      <Pagination postsPerPage={postsPerPage} totalPosts={players.length} pagination={pagination} />
    </React.Fragment>
  );
};

export default withErrorApi(Players);
