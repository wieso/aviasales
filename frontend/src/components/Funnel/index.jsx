import React from 'react';
import styles from './index.scss';
import Step from './Step';
import Cart from '../../assets/icons/cart.svg';
import Filter from '../../assets/icons/filter.svg';
import Pointer from '../../assets/icons/pointer.svg';

/*
  Preparing funnel with descriptions
 */
const steps = [
  {
    icon: Filter,
    title: 'Searches',
    prevValue: 'searchesPrevious',
    currValue: 'searchesCurrent',
    prevFilter: 'Last friday',
    description: {
      stats: [
        {
          title: 'Mobile traffic',
          valueField: 'mobilePessimizer',
          type: 'percent',
        },
        {
          title: 'Web traffic',
          valueField: 'webPessimizer',
          type: 'percent',
        }
      ],
      info: 'Traffic on mobile and desktop devices.'
    },
    help: [
      {
        title: 'Searches',
        link: '/searches',
      },
      {
        title: 'Pessimisation',
        link: '/pessimisation',
      },
    ],
  },
  {
    icon: Pointer,
    title: 'Clicks',
    prevValue: 'clicksPrevious',
    currValue: 'clicksCurrent',
    prevFilter: 'Last friday',
    description: {
      stats: [
        {
          title: 'CTR',
          valueField: 'ctrLast',
          type: 'percent',
        }
      ],
      info: 'Conversion from searches to clicks on all devices.',
    },
    help: [
      {
        title: 'CTR',
        link: '/ctr',
      },
      {
        title: 'Clicks',
        link: '/clicks',
      },
    ],
  },
  {
    icon: Cart,
    title: 'Booking',
    prevValue: 'bookingsPrevious',
    currValue: 'bookingsCurrent',
    prevFilter: 'Last friday',
    description: {
      stats: [
        {
          title: 'STR',
          valueField: 'strLast',
          type: 'percent',
        },
        {
          title: 'Avg. Check',
          valueField: 'avgPrice',
          type: 'int',
        }
      ],
      info: 'Conversion from clicks to bookings on all devices.',
    },
    help: [
      {
        title: 'STR',
        link: '/str',
      },
      {
        title: 'Bookings',
        link: '/bookings',
      },
      {
        title: 'Avg. Check',
        link: '/avg-check',
      },
    ],
  },
];

function Funnel({
  className = '',
  funnel={},
  filter='Yesterday'
}) {
  return (
    <div className={`${styles.Funnel} ${className}`}>
      {steps.map(item => (
        <Step
          className={styles.Step}
          key={item.title}
          title={item.title}
          icon={item.icon}
          prevValue={funnel[item.prevValue]}
          currValue={funnel[item.currValue]}
          filter={filter}
          prevFilter={item.prevFilter}
          description={item.description}
          help={item.help}
          funnel={funnel}
        />
      ))}
    </div>
  );
}

export default Funnel;