import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <Grid container md={12} spacing={4}>
          <Grid item md={0}>
            <Checkbox
              color='primary'
              onChange={this.props.toggleComplete.bind(this, id)}
            />
          </Grid>
          <Grid item md={10}>
            <TextField
              id='standard-read-only-input'
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              defaultValue={title}
              style={this.getStyle()}
            />
          </Grid>
          <Grid item md={0}>
            <Button
              variant='contained'
              size='small'
              onClick={this.props.delTodo.bind(this, id)}
              startIcon={<DeleteIcon />}
            >
              {' '}
              Delete{' '}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
