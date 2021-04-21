import styles from './MatchesCards.module.scss';

const MatchesCards = ({ id, name, official_stream_url, league, status }) => {
  return (
    <div className={styles.matches_block_item} key={id}>
      <div className={styles.matches_block_item_img}>
        {league.image_url ? <img src={`${league.image_url}`} alt={name} /> : 'NO IMG :('}
      </div>
      <div>{name.replace(/_/g, ' ').toUpperCase()}</div>
      <div>{league.name}</div>
      <div>{official_stream_url}</div>
      <div>{status}</div>
    </div>
  );
};

export default MatchesCards;
