import React, { Component } from 'react';
import './Delete.css';

export class Delete extends Component {
  render() {
    return (
      <div
        className='del'
        onClick={() => {
          this.props.editInput();
        }}
      >
        X
      </div>
    );
  }
}

export default Delete;
