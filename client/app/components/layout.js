'use strict';

import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children }) =>(
  <div className='container'>
    <br/>
    <nav className='navbar navbar-light bg-faded'>
      <div className='row toolbar-content'>
        <div className='col-md-12'>
          <div className='navbar-brand'>
            <Link to='/' activeClassName='active'>
              Self Taught Music
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/setup' className='nav-link' activeClassName='active'>
                Setup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br/><br/>
    {children}
  </div>
);

module.exports = Layout;
