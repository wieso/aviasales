import React from 'react';
import styles from './index.scss';

const FILTERS = [
  {
    alias: 'last_hour',
    title: 'Last hour',
  },
  {
    alias: 'today',
    title: 'Today',
  },
  {
    alias: 'yesterday',
    title: 'Yesterday',
  },
  {
    alias: 'last_3days',
    title: 'Last 3 days',
  },
];

function Filters({
  className = '',
  activeFilter = 'yesterday',
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