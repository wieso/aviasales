import React from 'react';
import styles from './index.scss';
import { FILTERS, DEFAULT_FILTER } from '../../constants';

function Filters({
  className = '',
  activeFilter = DEFAULT_FILTER,
  changeFilter,
}) {
  return (
    <div className={`${styles.Filters} ${className}`}>
      {FILTERS.map(filter => (
        <div
          key={filter.alias}
          className={`${styles.Filter} ${activeFilter === filter.alias ? styles.active : ''}`}
          onClick={() => changeFilter(filter.alias)}
        >
          {filter.title}
        </div>
      ))}
    </div>
  );
}

export default Filters;