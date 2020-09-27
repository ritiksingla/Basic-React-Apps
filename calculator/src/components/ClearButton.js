import React, { Component } from 'react';
import './ClearButton.css';

export class ClearButton extends Component {
  render() {
    return (
      <div
        className='clear-button'
        onClick={() => {
          this.props.clearInput();
        }}
      >
        CLEAR
      </div>
    );
  }
}

export default ClearButton;
