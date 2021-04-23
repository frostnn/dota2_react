import React, { useEffect, useState } from 'react';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_TEAMS, API_PRO_PLAYERS } from '../../../constants/const';
import styles from './TeamsCardsPlayers.module.scss';
import { Link } from 'react-router-dom';

const TeamsCardsPlayers = ({ id }) => {
  const [teamsPlayers, setTeamsPlayers] = useState([]);

  const getResursePlayers = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsPlayers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResursePlayers(`${API_TEAMS}/${id}/players`);
  }, []);
  return (
    <div className={styles.players_team}>
      <div className={styles.players_team_title}>Players</div>
      {teamsPlayers
        .filter((players) => players.name && players.is_current_team_member)
        .map(({ name }) => (
          <Link to={`/teams/players/${name}`}>
            <div className={styles.players_team_title_name}>{name}</div>
          </Link>
        ))}
    </div>
  );
};

export default TeamsCardsPlayers;
