import styles from './Teams.module.scss';
import { API_TEAMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setTeams(data);
  };

  useEffect(() => {
    getResurse(API_TEAMS);
  }, []);

  return (
    <React.Fragment>
      {teams.length &&
        teams.map(({ id, name, image_url, location, players }) => (
          <div className={styles.Teams_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
            <div>{location}</div>
            {players.map(({ name, role }) => {
              return (
                <div>
                  {name}-{role}
                </div>
              );
            })}
          </div>
        ))}
    </React.Fragment>
  );
};

export default Teams;
