import styles from './Live.module.scss';
import React, { useEffect, useState } from 'react';
import { API_LIVES, API_TOKEN } from '../../constants/const';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';

const Live = ({ setErrorApi }) => {
  const [live, setLive] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setLive(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResurse(API_LIVES);
    console.log(live);
    let socket = new WebSocket(`wss://live.pandascore.co/matches/585474?${API_TOKEN}`);
    socket.onmessage = (event) => console.log(JSON.parse(event.data));
    console.log(socket);
  }, []);

  return (
    <div className={styles.live_block}>
      {live.length ? (
        live.map(({ match }) => (
          <div>
            <h1>{match.name}</h1>
            <iframe
              src={`${match.live_embed_url}&parent=localhost&muted=true&autoplay=false`}
              height="420"
              width="680"></iframe>
          </div>
        ))
      ) : (
        <h1>NO LIVE</h1>
      )}
    </div>
  );
};

export default withErrorApi(Live);
