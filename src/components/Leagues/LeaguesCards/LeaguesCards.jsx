import styles from './LeaguesCards.module.scss';

const LeaguesCards = ({ id, image_url, name }) => {
  return (
    <div className={styles.leagues_block_item} key={id}>
      <div className={styles.leagues_block_item_img}>
        {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
      </div>
      <div className={styles.leagues_block_item_title}>{name.replace(/_/g, ' ').toUpperCase()}</div>
    </div>
  );
};

export default LeaguesCards;
