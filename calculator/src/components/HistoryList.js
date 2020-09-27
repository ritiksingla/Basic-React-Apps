import History from './History';
import React, { Component } from 'react';

export class HistoryList extends Component {
  render() {
    return this.props.history.map((data) => <History data={data} />);
  }
}

export default HistoryList;
