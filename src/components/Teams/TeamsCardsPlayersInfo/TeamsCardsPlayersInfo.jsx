import React, { useEffect, useState } from 'react';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_URL, API_TOKEN, API_PRO_PLAYERS } from '../../../constants/const';
import styles from './TeamsCardsPlayersInfo.module.scss';
import { useParams } from 'react-router';
import UiButton from '../../UI/UiButton/UiButton';
const TeamsCardsPlayersInfo = () => {
  const [players, setPlayers] = useState([]);
  const [teamsPlayersInfo, setTeamsPlayersInfo] = useState([]);
  const { name } = useParams();

  const getResursePlayersInfors = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsPlayersInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getResursePlayersInfo = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setPlayers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResursePlayersInfors(API_PRO_PLAYERS);
    getResursePlayersInfo(`${API_URL}/dota2/players?search[name]=${name}&${API_TOKEN}`);
  }, []);
  return (
    <div>
      <UiButton />
      <div className={styles.players_info_wrapper}>
        {players
          .filter((players) => players.name.toLocaleLowerCase() === name.toLocaleLowerCase())
          .map(({ first_name, last_name, name, image_url, nationality, role }) => (
            <div key={name}>
              <img src={image_url} alt={name} width="220" />
              <div>
                Name: {first_name} {last_name}
              </div>
              <div>Country: {nationality}</div>
              <div>Nickname: {name}</div>
              <div>Role: {role}</div>
            </div>
          ))}
        {teamsPlayersInfo
          .filter((items) => {
            if (items.name === name) {
              return items;
            }
          })
          .map(({ avatarfull, personaname, profileurl, last_match_time, last_login }) => (
            <div>
              <img src={avatarfull} alt={personaname} />
              <h3>personaname: {personaname}</h3>
              <div>{last_match_time}</div>
              <div>profileurl: {profileurl}</div>
              <div>last_login: {last_login}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamsCardsPlayersInfo;
