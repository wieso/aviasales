import React from 'react';
import axios from 'axios';
import camelize from 'camelize';
import Main from './Main';

const API = process.env.API || 'http://localhost:5000';

const initState = {
  data: null,
  loading: true,
  loaded: false,
  error: false,
};

class MainWrapper extends React.PureComponent {
  state = {
    filter: 'yesterday',
    metrics: {
      yesterday: initState,
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
      console.log(metrics[filter]);
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

  changeFilter = (filter) => this.setState({ filter }, () => this.getData());

  render() {
    const {
      metrics,
      filter,
    } = this.state;

    return (
      <Main
        filter={filter}
        changeFilter={this.changeFilter}
        {...metrics[filter]}
      />);
  }
}

export default MainWrapper;