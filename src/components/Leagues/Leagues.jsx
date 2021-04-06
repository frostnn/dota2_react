import styles from './Leagues.module.scss';
import { API_LEAGUES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setLeagues(data);
  };

  useEffect(() => {
    getResurse(API_LEAGUES);
  }, []);

  return (
    <React.Fragment>
      {leagues.length &&
        leagues.map(({ id, name, image_url }) => (
          <div className={styles.leagues_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
            <div>{id}</div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Leagues;
