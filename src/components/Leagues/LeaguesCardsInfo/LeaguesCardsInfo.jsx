import React, { useState, useEffect } from 'react';
import { API_LEAGUES } from '../../../constants/const';
import getDataApi from '../../../network/network';
import Loader from '../../Loader';
import UiLink from '../../UI/UiLink';
import UiButton from '../../UI/UiButton';
import styles from './LeaguesCardsInfo.module.scss';
import PropTypes from 'prop-types';

const LeaguesCardsInfo = ({ match, history }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setInfo(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getResurse(API_LEAGUES);
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : (
        info
          .filter((item) => item.id === +match.params.id)
          .map(({ name, id, image_url, url, series }) => (
            <div className={styles.leagues_info} key={id}>
              <div className={styles.leagues_info_header}>
                <div className={styles.leagues_info_header_wrapper}>
                  {history && <UiButton name={`Back`} direction={true} onClick={history.goBack} />}
                  <div className={styles.leagues_info_header_title}>{name}</div>
                  {url && <UiLink url={url} name={`Site leagues`} />}
                </div>
                <div className={styles.leagues_info_header_img}>
                  {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
                </div>
              </div>

              {series.map(({ begin_at, end_at, full_name, tier }) => (
                <div className={styles.leagues_info_body}>
                  {+begin_at.slice(0, 4) < new Date().getFullYear()
                    ? 'past tournaments'
                    : 'upcoming tournaments'}
                  <ul className={styles.leagues_info_body_list}>
                    <li>Begin: {begin_at ? begin_at.slice(0, 10) : `unknown`}</li>
                    <li>End: {end_at ? end_at.slice(0, 10) : `unknown`}</li>
                    <li>Name: {full_name ? full_name : `unknown`}</li>
                    <li>Tier: {tier ? tier.toUpperCase() : `unknown`}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))
      )}
    </React.Fragment>
  );
};
LeaguesCardsInfo.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};
export default LeaguesCardsInfo;
