import styles from './Heroes.module.scss';
import { API_HEROES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setHeroes(data);
  };

  useEffect(() => {
    getResurse(API_HEROES);
  }, []);

  return (
    <React.Fragment>
      {heroes.length &&
        heroes.map(({ id, name, image_url }) => (
          <div className={styles.heroes_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Heroes;
