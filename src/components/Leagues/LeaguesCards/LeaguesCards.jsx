import { withRouter } from 'react-router';
import styles from './LeaguesCards.module.scss';
import noImg from '../../../assets/img/no_img.jpg';
import { Link } from 'react-router-dom';
const LeaguesCards = ({ id, image_url, name, history }) => {
  return (
    <Link to={`/leagues/${id}`}>
      <div className={styles.leagues_block_item} key={id}>
        <div className={styles.leagues_block_item_img}>
          {image_url ? (
            <img src={`${image_url}`} alt={name} />
          ) : (
            <img src={noImg} className={styles.leagues_block_item_noimg} alt={name} />
          )}
        </div>
        <div className={styles.leagues_block_item_title}>
          {name.replace(/_/g, ' ').toUpperCase()}
        </div>
      </div>
    </Link>
  );
};

export default withRouter(LeaguesCards);
