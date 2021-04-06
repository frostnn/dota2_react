import styles from './Players.module.scss';
import { API_PLAYERS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setPlayers(data);
  };

  useEffect(() => {
    getResurse(API_PLAYERS);
  }, []);

  return (
    <React.Fragment>
      {players.length &&
        players.map(({ id, name, image_url, role }) => (
          <div className={styles.Players_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
            <div>{role ? role : 'no('}</div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Players;
