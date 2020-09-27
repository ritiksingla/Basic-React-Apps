import React, { Component } from 'react';
export class History extends Component {
  render() {
    return (
      <div>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default History;
