import React from 'react';
import styles from './index.scss';
import Cart from '../../../assets/icons/cart.svg';
import Arrow from '../../../assets/icons/arrowFunnel.svg';

function Icon() {
  return (
    <div className={styles.Icon}>
      <Cart width="28px" height="28px" />
      <div className={`${styles.Status} ${styles.bad}`} />
      <Arrow className={styles.Arrow} />
    </div>
  );
}

export default Icon;