import React, { useEffect, useState } from 'react';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_URL, API_TOKEN } from '../../../constants/const';
import styles from './TeamsCardsPlayersInfo.module.scss';

const TeamsCardsPlayersInfo = ({ name }) => {
  console.log('name:', name);
  const [players, setPlayers] = useState([]);

  /*   const getNamesPlayers = () => {
    const newTeamsPlayers = [...teamsPlayers];
    const names = [];
    newTeamsPlayers
      .filter((players) => {
        if (players.name && players.is_current_team_member) {
          return players;
        }
      })
      .map((players) => {
        names.push(players.name);
      });
    return setNamesPlayers(names);
  }; */

  const getResursePlayersInfo = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setPlayers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResursePlayersInfo(`${API_URL}/dota2/players?search[name]=${name}&${API_TOKEN}`);
  }, []);
  return (
    <div>
      {players
        .filter((players) => players.name.toLocaleLowerCase() === name.toLocaleLowerCase())
        .map(({ name }) => (
          <h1>{name}</h1>
        ))}
    </div>
  );
};

export default TeamsCardsPlayersInfo;
