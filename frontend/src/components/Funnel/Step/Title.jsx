import React from 'react';
import styles from './index.scss';
import { roundNumber, formatNumber } from '../../../utils';

function Title({
  title='',
  prevValue=1,
  currValue=0,
  filter='',
  prevFilter='',
}) {
  const percent = roundNumber((currValue / prevValue - 1) * 100);
  return (
    <div className={styles.Title}>
      <h2 className={styles.Header}>
        {title}
        {' '}
        {percent !== 100
        && <span className={`${styles.Percents} ${percent > 0 ? styles.good : styles.bad}`}>{percent}%</span>}
      </h2>
      <div className={styles.Results}>
        <div className={styles.Row}>
          <div className={styles.Value}>{formatNumber(currValue)}</div>
          <div className={styles.Period}>{filter}</div>
        </div>
        <div className={`${styles.Row} ${styles.prev}`}>
          <div className={styles.Value}>{formatNumber(prevValue)}</div>
          <div className={styles.Period}>{prevFilter}</div>
        </div>
      </div>
    </div>
  );
}

export default Title;