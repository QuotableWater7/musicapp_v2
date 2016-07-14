'use strict';

import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children }) =>(
  <div>
    <div className='navbar navbar-light bg-faded'>
      <div className='row toolbar-content'>
        <div className='col-md-12'>
          <div className='navbar-brand'>
            Brand link
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <h1>Music Practice Generator</h1>
          <Link to='/add'>Add</Link>
          {children}
        </div>
      </div>
    </div>
  </div>
);

module.exports = Layout;
