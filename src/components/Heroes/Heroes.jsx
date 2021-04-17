import styles from './Heroes.module.scss';
import { API_HEROES_PAGE_ONE, API_HEROES_PAGE_TWO, API_HEROES_STAT } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';

import Loader from '../Loader';
import HeroesCards from './HeroesCards/HeroesCards';
import { getDataApiInfo } from '../../network/networkInfo';

const Heroes = ({ setErrorApi }) => {
  const [heroes, setHeroes] = useState([]);
  const [heroesStat, setHeroesStat] = useState([]);

  const getResurseStat = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setHeroesStat(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };
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
    getResurse(API_HEROES_PAGE_ONE);
    getResurseStat(API_HEROES_STAT);
  }, []);

  return (
    <div className={styles.heroes_block}>
      {heroes.length === 0 ? (
        <Loader />
      ) : (
        heroes.map((props) => <HeroesCards {...props} key={props.id} heroesStat={heroesStat} />)
      )}
    </div>
  );
};

export default withErrorApi(Heroes);
