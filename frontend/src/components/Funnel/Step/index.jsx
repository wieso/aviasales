import React from 'react';
import styles from './index.scss';
import Icon from './Icon';
import Title from './Title';
import Description from './Description';

function Step({
  className = ''
              }) {
  return (
    <div className={`${styles.Step} ${className}`}>
      <Icon />
      <div className={styles.Info}>
        <Title />
        <Description />
      </div>
    </div>
  );
}

export default Step;