import React from 'react';
import styles from './index.scss';

const STATS = [
  {
    alias: 'err500',
    legend: 'Error 500',
    modificator: 'yellow',
    count: 1256,
  },
  {
    alias: 'err501',
    legend: 'Error 501',
    modificator: 'pink',
    count: 800,
  },
  {
    alias: 'err502',
    legend: 'Error 502',
    modificator: 'blue',
    count: 1256,
  },
  {
    alias: 'other',
    legend: 'Other',
    modificator: 'grey',
    count: 330,
  }
];

function calculatePercents(data) {
  const sum = data.reduce((acc, item) => item.count + acc, 0);
  return data.map(item => ({ ...item, percent: Math.round(item.count / sum * 100) }));
}

function LineStatistics({
  className = ''
}) {
  const stats = calculatePercents(STATS);
  return (
    <div className={`${styles.LineStatistics} ${className}`}>
      <div className={styles.Line}>
        {stats.map(item => (
          <div
            key={item.alias}
            className={`${styles.LinePart} ${styles[item.modificator]}`}
            style={{ width: `${item.percent}%` }}
          />)
        )}
      </div>
      <div className={styles.Legend}>
        {stats.map(item => (
          <div className={styles.Item}>
            <div className={`${styles.LegendIcon} ${styles[item.modificator]}`}/>
            <div className={styles.Value}>{`${item.legend}: ${item.count}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LineStatistics;