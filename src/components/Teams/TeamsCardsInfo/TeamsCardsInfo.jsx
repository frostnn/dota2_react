import styles from './TeamsCardsInfo.module.scss';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_TEAMS } from '../../../constants/const';
import { withErrorApi } from '../../../hoc/withErrorApi';
import UiButton from '../../UI/UiButton';
import StarIcon from '@material-ui/icons/Star';
import TeamsCardsPlayers from '../TeamsCardsPlayers';
import TeamsCardsChart from '../TeamsCardsChart';

const TeamsCardsInfo = ({ setErrorApi }) => {
  const [teamsInfo, setTeamsInfo] = useState([]);
  const { last_match_time, wins, rating, logo_url, losses, name } = teamsInfo;
  const lastMatch = new Date(last_match_time);
  const { id } = useParams();

  const getResurseInfo = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsInfo(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  const IconRating = withStyles({
    root: {
      color: '#fad201',
      marginRight: '5px',
    },
  })(StarIcon);

  useEffect(() => {
    getResurseInfo(`${API_TEAMS}/${id}`);
  }, []);
  return (
    <div className={styles.teams_item}>
      <UiButton />
      <div className={styles.teams_item_wrapper}>
        <div className={styles.teams_item_content}>
          <div className={styles.teams_item_name}>{name}</div>
          <div className={styles.teams_item_raiting}>
            <IconRating />
            {rating}
          </div>
          <TeamsCardsChart wins={wins} losses={losses} />
          <div>Last match: {lastMatch.getDate()} days</div>
        </div>
        <div className={styles.teams_item_logo}>
          <img src={logo_url} alt={name} />
        </div>
      </div>
      <TeamsCardsPlayers id={id} />
    </div>
  );
};

export default withErrorApi(TeamsCardsInfo);
