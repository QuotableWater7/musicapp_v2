'use strict';

import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {

  render () {
    return (
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
        <div className='row'>
          <div className='col-lg-12'>
            <p>This is the layout component!!!</p>
            <Link to='/add'>Add</Link>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

module.exports = Layout;
