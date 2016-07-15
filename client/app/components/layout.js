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
            <Link to='/'>Self Taught Music</Link>
          </div>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/setup' className='nav-link'>
                Setup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className='row'>
      <div className='col-lg-12'>
        <h3>Setup</h3>
        {children}
      </div>
    </div>
  </div>
);

module.exports = Layout;
