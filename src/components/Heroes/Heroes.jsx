import styles from './Heroes.module.scss';
import { API_HEROES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import Loader from '../Loader';

const Heroes = ({ setErrorApi }) => {
  const [heroes, setHeroes] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setHeroes(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResurse(API_HEROES);
  }, []);

  return (
    <div className={styles.heroes_block}>
      {heroes.length &&
        heroes.map(({ id, name, image_url }) => (
          <div className={styles.heroes_block_item} key={id}>
            <div className={styles.heroes_block_item_img}>
              {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            </div>
            <div className={styles.heroes_block_item_title}>
              {name.replace(/_/g, ' ').toUpperCase()}
            </div>
          </div>
        ))}
    </div>
  );
};

export default withErrorApi(Heroes);
