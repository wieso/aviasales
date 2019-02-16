import React from 'react';
import styles from './index.scss';
import Results from './Results';
import LineStatistics from './LineStatistics';

function Statistics({
  className = '',
}) {
  return (
    <div className={`${styles.Statistics} ${className}`}>
      <Results />
      <LineStatistics />
    </div>
  );
}

export default Statistics;