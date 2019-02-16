import React from 'react';
import styles from './index.scss';
import Step from './Step';

function Funnel({
  className = '',
                }) {
  return (
    <div className={`${styles.Funnel} ${className}`}>
      <Step className={styles.Step}/>
      <Step className={styles.Step}/>
      <Step className={styles.Step}/>
    </div>
  );
}

export default Funnel;