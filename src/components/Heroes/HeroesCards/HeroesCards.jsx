import styles from './HeroesCards.module.scss';
import { useState } from 'react';
import { heroesAttributes, heroesNotImg } from '../HeroesAddInfo/heroesAddInfo';
import HeroesTableStat from '../HeroesTableStat';

const HeroesCards = ({ id, image_url, localized_name, heroesStat }) => {
  const [visibility, setVisibility] = useState(false);
  const showTable = () => setVisibility(true);
  const hideTable = () => setVisibility(false);

  return (
    <div className={styles.heroes_block_item} onMouseEnter={showTable} onMouseLeave={hideTable}>
      <div className={styles.heroes_block_item_icon}>
        {heroesAttributes
          .filter(({ name }) => name.toLocaleLowerCase() === localized_name.toLocaleLowerCase())
          .map(({ attributes }, i) => (
            <img src={attributes} alt={localized_name} key={i} />
          ))}
      </div>
      <div className={styles.heroes_block_item_img}>
        {image_url === null ? (
          heroesNotImg
            .filter((item) => item.id === id)
            .map(({ img, id }) => <img src={img} alt={localized_name} key={id} />)
        ) : (
          <img src={image_url} alt={localized_name} key={id} />
        )}
      </div>
      <div className={styles.heroes_block_item_title}>{localized_name}</div>
      {heroesStat &&
        heroesStat
          .filter((item) => item.localized_name === localized_name)
          .map((props) => <HeroesTableStat {...props} visibility={visibility} key={id} />)}
    </div>
  );
};

export default HeroesCards;
