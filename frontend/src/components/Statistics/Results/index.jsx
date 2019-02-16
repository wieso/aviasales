import React from 'react';
import styles from './index.scss';

function Results() {
  return (
    <div className={styles.Results}>
      <div className={styles.Result}>
        <div className={styles.Point}/>
        <div className={styles.MainInfo}>Errors: 0.12%</div>
        <div className={styles.AdditionalInfo}>Average: 0,11%</div>
      </div>
      <div className={styles.Result}>
        <div className={styles.Point}/>
        <div className={styles.MainInfo}>Zeroes: 0.12%</div>
        <div className={styles.AdditionalInfo}>Average: 0,11%</div>
      </div>
      <div className={styles.Result}>
        <div className={styles.Point}/>
        <div className={styles.MainInfo}>Timeouts: 0.12%</div>
        <div className={styles.AdditionalInfo}>Average: 0,11%</div>
      </div>
    </div>
  );
}

export default Results;