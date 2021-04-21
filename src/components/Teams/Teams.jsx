import styles from './Teams.module.scss';
import { API_TEAMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import { withErrorApi } from '../../hoc/withErrorApi';
import TeamsCards from './TeamsCards';
import Loader from '../Loader';
import { getDataApiInfo } from '../../network/networkInfo';

const Teams = ({ setErrorApi }) => {
  const [teams, setTeams] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeams(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResurse(API_TEAMS);
  }, []);

  return (
    <div className={styles.teams_block}>
      {teams.length === 0 ? (
        <Loader />
      ) : (
        teams.map((props) => <TeamsCards {...props} key={props.id} />)
      )}
    </div>
  );
};

export default withErrorApi(Teams);
