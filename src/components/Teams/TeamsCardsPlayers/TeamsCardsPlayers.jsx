import React, { useEffect, useState } from 'react';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_TEAMS, API_PRO_PLAYERS } from '../../../constants/const';
import styles from './TeamsCardsPlayers.module.scss';
import noImg from '../../../assets/img/no_img.jpg';
import TeamsCardsPlayersInfo from '../TeamsCardsPlayersInfo';

const TeamsCardsPlayers = ({ id }) => {
  const [teamsPlayers, setTeamsPlayers] = useState([]);
  const [teamsPlayersInfo, setTeamsPlayersInfo] = useState([]);
  const [namesPlayers, setNamesPlayers] = useState([]);
  const [players, setPlayers] = useState([]);

  const getNamesPlayers = () => {
    const newTeamsPlayers = [...teamsPlayers];
    const names = [];
    newTeamsPlayers
      .filter((players) => {
        if (players.name && players.is_current_team_member) {
          return players;
        }
      })
      .map((players) => {
        return names.push(players.name);
      });
    return setNamesPlayers(names);
  };

  const getResursePlayers = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsPlayers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getResursePlayersInfo = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsPlayersInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResursePlayers(`${API_TEAMS}/${id}/players`);
    getResursePlayersInfo(API_PRO_PLAYERS);
    getNamesPlayers();
  }, []);
  return (
    <div>
      {teamsPlayers
        .filter((players) => players.name && players.is_current_team_member)
        .map((players) => (
          <h1>{players.name}</h1>
        ))}
      -------------
      {
        /*       {teamsPlayersInfo
        .filter((items) => {
          if (items.team_id === +id) {
            return items;
          }
        })
        .map(
          ({
            avatarfull,
            name,
            personaname,
            loccountrycode,
            profileurl,
            last_match_time,
            fantasy_role,
            last_login,
          }) => (
            <div>
              <img src={avatarfull} alt={name} />
              <h1>{name}</h1>
              <h3>personaname: {personaname}</h3>
              <div>loc: {loccountrycode}</div>
              <div>fantasy_role:{fantasy_role}</div>
              <div>{last_match_time}</div>
              <div>profileurl: {profileurl}</div>
              <div>last_login: {last_login}</div>
            </div>
          ),
        )} */
        namesPlayers.map((item) => {
          return <TeamsCardsPlayersInfo name={item} />;
        })
      }
    </div>
  );
};

export default TeamsCardsPlayers;
