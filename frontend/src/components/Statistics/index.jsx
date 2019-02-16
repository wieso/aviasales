import React from 'react';
import styles from './index.scss';
import Results from './Results';
import LineStatistics from './LineStatistics';

function Statistics({
  className = '',
  errors = [],
  statistics = {},
}) {
  return (
    <div className={`${styles.Statistics} ${className}`}>
      <Results statistics={statistics} />
      {errors.length > 0 && <LineStatistics errors={errors} />}
    </div>
  );
}

export default Statistics;