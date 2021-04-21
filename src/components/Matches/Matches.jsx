import styles from './Matches.module.scss';
import { API_MATCHES } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';
import MatchesCards from './MatchesCards';
import Loader from '../Loader';
const Matches = ({ setErrorApi }) => {
  const [matches, setMatches] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setMatches(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResurse(API_MATCHES);
    console.log(matches);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.matches_block}>
        {matches.length === 0 ? (
          <Loader />
        ) : (
          matches.map((props) => <MatchesCards {...props} key={props.id} />)
        )}
      </div>
    </React.Fragment>
  );
};

export default withErrorApi(Matches);
