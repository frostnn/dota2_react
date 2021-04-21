import styles from './TeamsCards.module.scss';
import noImg from '../../../assets/img/no_img.jpg';
import { Link } from 'react-router-dom';
const TeamsCards = ({ team_id, name, logo_url }) => {
  return (
    <Link to={`/teams/${team_id}`}>
      <div className={styles.teams_block_item} key={team_id}>
        <div className={styles.teams_block_item_img}>
          {logo_url ? (
            <img src={`${logo_url}`} alt={name} />
          ) : (
            <img src={noImg} className={styles.teams_block_item_noimg} alt={name} />
          )}
        </div>
        <div className={styles.teams_block_item_title}>{name ? name : 'forgot name :)'}</div>
      </div>
    </Link>
  );
};

export default TeamsCards;
