import React from 'react';
import styles from './index.scss';
import { roundNumber } from '../../../utils';

const items = [
  {
    title: 'Errors',
    field: 'errors',
    avgField: 'avgErrors',
  },
  {
    title: 'Zeroes',
    field: 'zeroes',
    avgField: 'avgZeroes',
  },
  {
    title: 'Timeouts',
    field: 'timeout',
    avgField: 'avgTimeout',
  },
];

function Results({
 statistics,
}) {
  return (
    <div className={styles.Results}>
      {items.map(item => (
        <div key={item.field} className={styles.Result}>
          <div className={styles.Point}/>
          <div className={styles.MainInfo}>{item.title}: {roundNumber(statistics[item.field])}%</div>
          <div className={styles.AdditionalInfo}>Average: {roundNumber(statistics[item.avgField])}%</div>
        </div>
      ))}
    </div>
  );
}

export default Results;