import React from 'react';
import styles from './index.scss';
import Arrow from '../../../assets/icons/arrowFunnel.svg';

function Icon({
  icon: IconSvg,
  status,
}) {
  return (
    <div className={styles.Icon}>
      {!!IconSvg && <IconSvg width="28px" height="28px" />}
      <div className={`${styles.Status} ${status ? styles.good : styles.bad}`} />
      <Arrow className={styles.Arrow} />
    </div>
  );
}

export default Icon;