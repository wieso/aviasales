import React from 'react';
import styles from './index.scss';
import Icon from './Icon';
import Title from './Title';
import Description from './Description';
import { roundNumber } from '../../../utils';

function Step({
  className = '',
  icon,
  title,
  prevValue,
  currValue,
  filter,
  prevFilter,
  description,
  help,
  funnel,
}) {
  const status = roundNumber((currValue / prevValue - 1) * 100) >= 0;
  return (
    <div className={`${styles.Step} ${className}`}>
      <Icon icon={icon} status={status} />
      <div className={styles.Info}>
        <Title
          title={title}
          prevValue={prevValue}
          currValue={currValue}
          filter={filter}
          prevFilter={prevFilter}
        />
        <Description description={description} help={help} funnel={funnel} />
      </div>
    </div>
  );
}

export default Step;