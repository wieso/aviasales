import React from 'react';
import styles from './index.scss';
import { formatNumber } from '../../../utils';

const colors = ['yellow', 'pink', 'blue', 'grey'];

function prepareData(data) {
  const sum = data.reduce((acc, item) => item.count + acc, 0);
  return data.map((item, i) => ({
    ...item,
    legend: item.code ? `Error ${item.code}` : 'Other',
    modificator: colors[i % colors.length],
    percent: Math.round(item.count / sum * 100),
  }));
}

function LineStatistics({
  className = '',
  errors = [],
}) {
  const stats = prepareData(errors);
  return (
    <div className={`${styles.LineStatistics} ${className}`}>
      <div className={styles.Line}>
        {stats.map(item => (
          <div
            key={item.code}
            className={`${styles.LinePart} ${styles[item.modificator]}`}
            style={{ width: `${item.percent}%` }}
          />)
        )}
      </div>
      <div className={styles.Legend}>
        {stats.map(item => (
          <div className={styles.Item} key={item.code}>
            <div className={`${styles.LegendIcon} ${styles[item.modificator]}`}/>
            <div className={styles.Value}>{`${item.legend}: ${formatNumber(item.count)}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LineStatistics;