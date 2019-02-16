import React from 'react';
import styles from './index.scss';
import { formatNumber, roundNumber } from '../../../utils';

function Description({
  description = {},
  help = [],
  funnel,
}) {
  return (
    <div className={styles.Description}>
      <div className={styles.MainDescr}>
        {description.stats.map(item => (
          <div key={item.title} className={styles.Point}>
            {item.title}:
            {' '}
            {
              item.type === 'percent'
                ? `${roundNumber(funnel[item.valueField])}%`
                : formatNumber(roundNumber(funnel[item.valueField]))
            }
          </div>
        ))}
      </div>
      <div className={styles.AdditionalDescr}>
        {description.info}
      </div>
      <div className={styles.Help}>
        Help:
        {' '}
        {help.map((item, i) => (
          <React.Fragment key={i}>
            {i !== 0 && ', '}
            <a href={item.link} className={styles.link}>{item.title}</a>
          </React.Fragment>))}
      </div>
    </div>
  );
}

export default Description;