import styles from './Players.module.scss';
import { API_PLAYERS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Loader from '../Loader';

const Players = ({ setErrorApi }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setPlayers(data);
      setErrorApi(false);
      setLoading(false);
    } catch (error) {
      setErrorApi(true);
      setLoading(true);
    }
  };

  useEffect(() => {
    getResurse(API_PLAYERS);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        players.length &&
        players.map(({ id, name, image_url, role }) => (
          <div className={styles.Players_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
            <div>{role ? role : 'no('}</div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default withErrorApi(Players);
