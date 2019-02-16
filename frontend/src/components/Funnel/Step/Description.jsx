import React from 'react';
import styles from './index.scss';

function Description() {
  return (
    <div className={styles.Description}>
      <div className={styles.MainDescr}>
        <div className={styles.Point}>Mobile traffic: 100%</div>
        <div className={styles.Point}>Web traffic: 100%</div>
      </div>
      <div className={styles.AdditionalDescr}>
        You get 100% traffic on mobile and desktop devices.
      </div>
      <div className={styles.Help}>
        Help: <span className={styles.link}>Searches</span>, <span className={styles.link}>Pessimisation</span>
      </div>
    </div>
  );
}

export default Description;