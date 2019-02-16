import React from 'react';
import styles from './index.scss';
import Funnel from '../Funnel';
import Filters from '../Filters';
import Statistics from '../Statistics';


function Main() {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Main}>
        <h1 className={styles.Header}>Main metrics</h1>
        <Filters className={styles.Filter} />
        <Statistics className={styles.Statistics}/>
        <Funnel className={styles.Funnel}/>
      </div>
    </div>
  );
}

export default Main;