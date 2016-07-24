'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { signUserOut } from '../actions/user';

const Layout = ({ user, children, signOut }) => {
  let user_data = user.get('user_data');

  return (
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
                {renderUserInfo(user_data)}
                <li className='nav-item'>
                  {user.get('initialized') ? (user_data.get('id') ? signOutLink(signOut) : signInLink()) : false}
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
};

const renderUserInfo = (user_data) => {
  if (!user_data.get('first_name')) { return; }

  return (
    <li className='nav-item'>
      <a href='#' className='nav-link' onClick={e => e.preventDefault()}>
        {user_data.get('first_name')}
      </a>
    </li>
  );
};

const signInLink = () => {
  return (
    <Link to='sign-in' className='nav-link' activeClassName='active'>
      Sign In
    </Link>
  );
};

const signOutLink = (signOut) => {
  return (
    <Link
      to='/'
      className='nav-link'
      activeClassName='active'
      onClick={signOut}
    >
      Sign Out
    </Link>
  );
};

const wrapper = connect(
  (state) => {
    return { user: state.get('user') };
  },
  (dispatch) => {
    return {
      signOut() { dispatch(signUserOut()); }
    }
  }
)(Layout);
export default wrapper;
