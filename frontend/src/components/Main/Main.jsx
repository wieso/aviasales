import React from 'react';
import styles from './index.scss';
import Funnel from '../Funnel';
import Filters from '../Filters';
import Statistics from '../Statistics';

function Content({
  data = null,
  loading,
  loaded,
  error,
  filter,
  changeFilter,
}) {
  return (
    <>
      <Filters activeFilter={filter} changeFilter={changeFilter}/>
      {!data && <div className={styles.Error}>Извините, недостаточно данных для отчета.</div>}
      {!!data && <Statistics
        className={styles.Statistics}
        errors={data.errors}
        statistics={data.statistics}
      />}
      {!!data && <Funnel className={styles.Funnel} funnel={data.funnel}/>}
    </>
  )
}

function Main(props) {
  const {
    loading,
    loaded,
    error,
  } = props;
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Main}>
        <h1 className={styles.Header}>Main metrics</h1>
        <div className={styles.Content}>
          {loading && <div className={styles.Loader} />}
          {loaded && !error && <Content {...props}/>}
          {error && <div className={styles.Error}>Извините, произошла ошибка. Попробуйте позже.</div>}
        </div>
      </div>
    </div>
  );
}

export default Main;