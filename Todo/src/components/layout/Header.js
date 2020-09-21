import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {
  //   setTimeout(() => {
  //     props.history.push('/');
  //   }, 2000);
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to='/'>
        Home
      </Link>{' '}
      |
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  );
};
const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};
const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
};
export default withRouter(Header);