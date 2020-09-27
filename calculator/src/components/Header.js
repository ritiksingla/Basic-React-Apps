import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>Calculator</Link>{' '}
          </li>
          <li>
            <NavLink to='/history'>History</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
