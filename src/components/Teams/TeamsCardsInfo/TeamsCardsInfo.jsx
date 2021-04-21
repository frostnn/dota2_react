import styles from './TeamsCardsInfo.module.scss';
import noImg from '../../../assets/img/no_img.jpg';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDataApiInfo } from '../../../network/networkInfo';
import { API_TEAMS } from '../../../constants/const';
import { withErrorApi } from '../../../hoc/withErrorApi';
import UiButton from '../../UI/UiButton';
import StarIcon from '@material-ui/icons/Star';
const TeamsCardsInfo = ({ setErrorApi }) => {
  const [teamsInfo, setTeamsInfo] = useState([]);
  const { last_match_time, wins, rating, logo_url, losses, name } = teamsInfo;
  const winPercent = ((wins / (wins + losses)) * 100).toFixed(2);
  const lossePercent = ((losses / (wins + losses)) * 100).toFixed(2);
  const lastMatch = new Date(last_match_time);
  const valueChart = (winPercent * 408) / 100;
  const { id } = useParams();
  const getResurse = async (url) => {
    try {
      const data = await getDataApiInfo(url);
      setTeamsInfo(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResurse(`${API_TEAMS}/${id}`);
  }, []);
  return (
    <div className={styles.teams_item}>
      <UiButton />
      <div className={styles.teams_item_wrapper}>
        <div className={styles.teams_item_content}>
          <div className={styles.teams_item_name}>{name}</div>
          <div className={styles.teams_item_chart}>
            <svg width="160" height="160">
              <circle transform="rotate(-90)" r="65" cx="-80" cy="80" />
              <circle
                transform="rotate(-90)"
                style={{ strokeDasharray: valueChart + 'px' + ' ' + 408 + 'px' }}
                r="65"
                cx="-80"
                cy="80"
              />
              <g className={styles.teams_item_chart_text}>
                <text x="50%" y="50%" className={styles.teams_item_chart_number}>
                  {wins + losses}
                </text>
                <text x="50%" y="50%" className={styles.teams_item_chart_label}>
                  Total games
                </text>
              </g>
            </svg>
            <div className={styles.teams_item_chart_value_wrapper}>
              <div className={styles.teams_item_chart_value}>wins: {winPercent} %</div>
              <div className={styles.teams_item_chart_value}>losses: {lossePercent} %</div>
            </div>
          </div>
          <div>Last match: {lastMatch.getDate()} days</div>
          <div>
            <StarIcon color="primary" /> {rating}
          </div>
        </div>
        <div className={styles.teams_item_logo}>
          <img src={logo_url} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default withErrorApi(TeamsCardsInfo);
