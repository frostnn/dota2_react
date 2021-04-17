import styles from './HeroesTableStat.module.scss';
import iconAgi from '../../../assets/img/icon/icon-agi.png';
import iconStr from '../../../assets/img/icon/icon-str.png';
import iconInt from '../../../assets/img/icon/icon-int.png';
import iconAttack from '../../../assets/img/icon/overviewicon_attack.png';
import iconSpeed from '../../../assets/img/icon/overviewicon_speed.png';
import iconDefense from '../../../assets/img/icon/overviewicon_defense.png';
import ClassNames from 'classnames';
const HeroesTableStat = ({
  base_attack_max,
  base_attack_min,
  base_armor,
  move_speed,
  base_str,
  base_int,
  base_agi,
  id,
  visibility,
}) => {
  return (
    <div className={ClassNames(styles.table_wrapper, visibility ? styles.show : null)} key={id}>
      <table className={styles.table_content}>
        <tbody>
          <tr>
            <td>
              <img src={iconStr} alt="" />
            </td>
            <td>{base_str}</td>
            <td>
              <img src={iconAttack} alt="" />
            </td>
            <td>
              {base_attack_min} - {base_attack_max}
            </td>
          </tr>
          <tr>
            <td>
              <img src={iconAgi} alt="" />
            </td>
            <td>{base_agi}</td>
            <td>
              <img src={iconDefense} alt="" />
            </td>
            <td>{base_armor}</td>
          </tr>
          <tr>
            <td>
              <img src={iconInt} alt="" />
            </td>
            <td>{base_int}</td>
            <td>
              <img src={iconSpeed} alt="" />
            </td>
            <td>{move_speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeroesTableStat;
