import styles from './Teams.module.scss';
import { API_TEAMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';

const Teams = ({ setErrorApi }) => {
  const [teams, setTeams] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
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
      {teams.length &&
        teams.map(({ id, name, image_url, location, players }) => (
          <div className={styles.teams_block_item} key={id}>
            <div className={styles.teams_block_item_img}>
              {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            </div>
            <div className={styles.teams_block_item_title}>
              {name.replace(/_/g, ' ').toUpperCase()}
            </div>
            <div>{location}</div>
            {players.map(({ name, role }, i) => {
              return (
                <div key={i}>
                  {name}-{role}
                </div>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default withErrorApi(Teams);
