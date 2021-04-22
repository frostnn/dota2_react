import styles from './TeamsCardsChart.module.scss';

const TeamsCardsChart = ({ wins, losses }) => {
  const winPercent = ((wins / (wins + losses)) * 100).toFixed(2);
  const lossePercent = ((losses / (wins + losses)) * 100).toFixed(2);
  const valueChart = (winPercent * 408) / 100;
  return (
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
  );
};

export default TeamsCardsChart;
