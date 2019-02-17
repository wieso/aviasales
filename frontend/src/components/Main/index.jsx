import React from 'react';
import axios from 'axios';
import camelize from 'camelize';
import QS from 'query-string';
import Main from './Main';
import { FILTERS, DEFAULT_FILTER } from '../../constants';

const API = process.env.API || 'http://localhost:5000';

const initState = {
  data: null,
  loading: true,
  loaded: false,
  error: false,
};

class MainWrapper extends React.PureComponent {
  state = {
    filter: QS.parse(location.search).filter || DEFAULT_FILTER,
    metrics: {
      [DEFAULT_FILTER]: initState,
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const {
      filter,
      metrics,
    } = this.state;
    try {
      // Load data once
      if (metrics[filter] && metrics[filter].loaded && !metrics[filter].error) return null;

      this.setState(prevState => ({
        metrics: {
          ...prevState.metrics,
          [filter]: initState,
        },
      }));

      const { data } = await axios(`${API}/api?filter=${filter}`);

      this.setState(prevState => ({
        metrics: {
          ...prevState.metrics,
          [filter]: {
            data: camelize(data.data),
            loading: false,
            loaded: true,
            error: false,
          },
        },
      }));
    } catch (e) {
      console.error(e);
      this.setState(prevState => ({
        metrics: {
          ...prevState.metrics,
          [filter]: {
            data: null,
            loading: false,
            loaded: true,
            error: true,
          },
        },
      }))
    }
  };

  changeFilter = (filter) => this.setState({ filter }, () => {
    const allParams = QS.parse(location.search);
    const newParams = { ...allParams, filter }; // it's for saving other query params, e.g. utm
    // it's for saving the tab sate after loading
    window.history.replaceState(filter, `Metrics: ${filter}`,`?${QS.stringify(newParams)}`);
    this.getData();
  });

  render() {
    const { metrics, filter } = this.state;

    return (
      <Main
        filter={filter}
        changeFilter={this.changeFilter}
        {...metrics[filter]}
      />);
  }
}

export default MainWrapper;