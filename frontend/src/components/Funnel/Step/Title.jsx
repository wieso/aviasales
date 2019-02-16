import React from 'react';
import styles from './index.scss';

function Title() {
  return (
    <div className={styles.Title}>
      <h2 className={styles.Header}>
        Searches
        {' '}
        <span className={`${styles.Percents} ${styles.good}`}>-15%</span>
      </h2>
      <div className={styles.Results}>
        <div className={styles.Row}>
          <div className={styles.Value}>29 300</div>
          <div className={styles.Period}>Yesterday</div>
        </div>
        <div className={`${styles.Row} ${styles.prev}`}>
          <div className={styles.Value}>5 300</div>
          <div className={styles.Period}>Last friday</div>
        </div>
      </div>
    </div>
  );
}

export default Title;