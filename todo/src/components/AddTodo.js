import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';

export class AddTodo extends Component {
  state = {
    title: '',
  };
  onChange = (e) => this.setState({ title: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Grid container md={12} spacing={9}>
          <Grid item md={0}></Grid>
          <Grid item md={10}>
            <TextField
              id='standard-basic'
              label='Add Todo'
              fullWidth
              value={this.state.title}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item md={0}>
            <Fab color='primary' aria-label='add' onClick={this.onSubmit}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default AddTodo;
