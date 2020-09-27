import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import Delete from './components/Delete';
import HistoryList from './components/HistoryList';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {
    input: '0',
    previousNumber: '',
    operator: '',
    history: [],
  };
  addToInput = (val) => {
    if (this.state.input.length > 9) {
      return;
    }
    if (this.state.input === '0') {
      this.setState({
        input: val,
      });
    } else {
      this.setState({
        input: this.state.input + val,
      });
    }
  };
  clearInput = () => {
    this.setState({
      input: '0',
    });
  };
  onAdd = () => {
    this.setState({
      previousNumber: this.state.input,
      operator: 'add',
      input: '0',
    });
  };
  onDiv = () => {
    this.setState({
      previousNumber: this.state.input,
      operator: 'div',
      input: '0',
    });
  };
  onMult = () => {
    this.setState({
      previousNumber: this.state.input,
      operator: 'mult',
      input: '0',
    });
  };
  onSub = () => {
    this.setState({
      previousNumber: this.state.input,
      operator: 'sub',
      input: '0',
    });
  };
  evaluate = (val) => {
    const currentNumber = parseFloat(this.state.input);
    if (this.state.operator === 'add') {
      this.setState({
        input: (
          parseFloat(this.state.previousNumber) + currentNumber
        ).toString(),
        history: [
          ...this.state.history,
          this.state.previousNumber +
            ' + ' +
            currentNumber +
            ' = ' +
            (parseFloat(this.state.previousNumber) + currentNumber).toString(),
        ],
      });
    } else if (this.state.operator === 'sub') {
      this.setState({
        input: (
          parseFloat(this.state.previousNumber) - currentNumber
        ).toString(),
        history: [
          ...this.state.history,
          this.state.previousNumber +
            ' - ' +
            currentNumber +
            ' = ' +
            (parseFloat(this.state.previousNumber) - currentNumber).toString(),
        ],
      });
    } else if (this.state.operator === 'mult') {
      this.setState({
        input: (
          parseFloat(this.state.previousNumber) * currentNumber
        ).toString(),
        history: [
          ...this.state.history,
          this.state.previousNumber +
            ' * ' +
            currentNumber +
            ' = ' +
            (parseFloat(this.state.previousNumber) * currentNumber).toString(),
        ],
      });
    } else if (this.state.operator === 'div') {
      this.setState({
        input: (
          parseFloat(this.state.previousNumber) / currentNumber
        ).toString(),
        history: [
          ...this.state.history,
          this.state.previousNumber +
            ' / ' +
            currentNumber +
            ' = ' +
            (parseFloat(this.state.previousNumber) / currentNumber).toString(),
        ],
      });
    }
  };
  addZero = (val) => {
    if (this.state.input !== '0') {
      this.setState({
        input: this.state.input + val,
      });
    } else {
      this.setState({
        input: '0',
      });
    }
  };
  editInput = () => {
    var lastInput = this.state.input;
    lastInput = lastInput.toString();
    lastInput = lastInput.substr(0, lastInput.length - 1);
    this.setState({
      input: lastInput,
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/history'>
              <HistoryList history={this.state.history}></HistoryList>
            </Route>
            <Route path='/'>
              <div className='calculator'>
                <Input>{this.state.input}</Input>
                <div className='row'>
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.onDiv}>/</Button>
                </div>
                <div className='row'>
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.onMult}>*</Button>
                </div>
                <div className='row'>
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.onAdd}>+</Button>
                </div>
                <div className='row'>
                  <Button handleClick={this.addToInput}>.</Button>
                  <Button handleClick={this.addZero}>0</Button>
                  <Button handleClick={this.evaluate}>=</Button>
                  <Button handleClick={this.onSub}>-</Button>
                </div>
                <div className='row'>
                  <ClearButton clearInput={this.clearInput} />
                  <Delete editInput={this.editInput} />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
