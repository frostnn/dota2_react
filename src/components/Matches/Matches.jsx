import styles from './Matches.module.scss';
import { API_MATCHES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setMatches(data);
  };

  useEffect(() => {
    getResurse(API_MATCHES);
  }, []);

  return (
    <React.Fragment>
      {matches.length &&
        matches.map(({ id, name, official_stream_url, league, status }) => (
          <div className={styles.Matches_item} key={id}>
            {league.image_url ? <img src={`${league.image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
            <div>{league.name}</div>
            <div>{official_stream_url}</div>
            <div>{status}</div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Matches;
