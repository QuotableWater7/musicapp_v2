'use strict';

import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children }) =>(
  <div className='container'>
    <br/>
    <nav className='navbar navbar-light' style={{ background: '#e3f2fd' }}>
      <div className='row toolbar-content'>
        <div className='col-md-12'>
          <div className='navbar-brand'>
            <Link to='/' activeClassName='active'>
              Self Taught Music
            </Link>
          </div>
          <div className='navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <Link to='/setup' className='nav-link' activeClassName='active'>
                  Setup
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/practice' className='nav-link' activeClassName='active'>
                  Practice
                </Link>
              </li>
            </ul>
            <ul className='nav navbar-nav pull-xs-right'>
              <li className='nav-item'>
                <Link to='sign-in' className='nav-link' activeClassName='active'>
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <br/><br/>
    {children}
  </div>
);

module.exports = Layout;
