import React from 'react';
import camelize from 'camelize';
import styles from './index.scss';
import Funnel from '../Funnel';
import Filters from '../Filters';
import Statistics from '../Statistics';


const response = {
  data: {
    'funnel': {
      'bookings_current': 7556,
      'bookings_previous': 8647,
      'str_last': 15.0496942657398,
      'avg_price': 10694.8964067661,
      'clicks_current': 60207,
      'clicks_previous': 60505,
      'ctr_last': 1.12946752356254,
      'searches_current': 10445192,
      'searches_previous': 6118984,
      'mobile_pessimizer': 0.000999999974737875,
      'web_pessimizer': 100.0,
    },
    'statistics': {
      'errors': 0.143953287057117,
      'avg_errors': 0.143953287057117,
      'zeroes': 5.55262854787825,
      'avg_zeroes': 5.55262854787825,
      'timeout': 0.122851836321131,
      'avg_timeout': 0.122851836321131,
    },
    'errors': [
      {
        'count': 200,
        'code': 502
      },
      {
        'count': 720,
        'code': 599
      },
      {
        'count': 1780,
        'code': null
      }
    ],
    'gate_id': 20,
  },
  'errors_last_3days': [
    {
      'count': 2,
      'code': 502
    },
    {
      'count': 720,
      'code': 599
    },
    {
      'count': 1780,
      'code': null
    }
  ],
  'errors_yesterday': [
    {
      'count': 615,
      'code': null
    },
    {
      'count': 305,
      'code': 599
    }
  ],
  'errors_last_hour': [],
  'data_old': [
    {
      'bookings_current_last_3days': 7556,
      'bookings_previous_last_3days': 8647,
      'str_last_3days': 15.0496942657398,
      'avg_price_last_3days': 10694.8964067661,
      'clicks_current_last_3days': 50207,
      'clicks_previous_last_3days': 60505,
      'ctr_last_3days': 1.12946752356254,
      'searches_current_last_3days': 4445192,
      'searches_previous_last_3days': 6118984,

      'errors_last_3days': 0.143953287057117,
      'zeroes_last_3days': 5.55262854787825,
      'timeout_last_3days': 0.122851836321131,

      'timeout_yesterday': 0.217542189065684,
      'zeroes_yesterday': 5.03052033295241,
      'avg_price_yesterday': 9447.87135852322,
      'bookings_previous_yesterday': 3641,
      'searches_previous_yesterday': 2050500,
      'str_yesterday': 14.9289099526066,
      'errors_yesterday': 0.376232384954177,
      'clicks_current_yesterday': 23210,
      'clicks_previous_yesterday': 23364,
      'searches_current_yesterday': 2188541,
      'bookings_current_yesterday': 3465,
      'ctr_yesterday': 1.06052388326287,

      'clicks_current_last_hour': 428,
      'avg_price_last_hour': 10243.0263157895,
      'zeroes_last_hour': null,
      'bookings_current_last_hour': 32,
      'bookings_previous_last_hour': 98,
      'ctr_last_hour': 0.640574721245229,
      'clicks_previous_last_hour': 784,
      'searches_previous_last_hour': 88385,
      'str_last_hour': null,
      'searches_current_last_hour': 66815,
      'timeout_last_hour': null,
      'errors_last_hour': null,
      'gate_id': 20,

      'mobile_pessimizer': 0.000999999974737875,
      'web_pessimizer': 100.0,
    }
  ]
};

const data = camelize(response.data);

function Main({
  data,
  filter,
  changeFilter,
}) {
  return (
    <div className={styles.MainWrapper}>
      <div className={styles.Main}>
        <h1 className={styles.Header}>Main metrics</h1>
        <Filters className={styles.Filter} activeFilter={filter} changeFilter={changeFilter} />
        <Statistics
          className={styles.Statistics}
          errors={data.errors}
          statistics={data.statistics}
        />
        <Funnel className={styles.Funnel} funnel={data.funnel}/>
      </div>
    </div>
  );
}

class MainWrapper extends React.PureComponent {
  state = {
    filter: 'yesterday',
    data,
    meta: {
      loading: true,
      loaded: false,
    },
  };

  changeFilter = (filter) => this.setState({ filter });

  render() {
    const {
      data,
      filter,
    } = this.state;
    return (<Main data={data} filter={filter} changeFilter={this.changeFilter} />);
  }
}

export default MainWrapper;