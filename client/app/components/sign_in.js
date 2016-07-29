import React from 'react';
import { connect } from 'react-redux';

import { signUserIn, updateUser } from '../actions/user';

const SignIn = ({ user, updateUser, signIn }) => {
  let errors = user.get('errors');

  return (
    <div className='row'>
      <div className='col-md-4 col-md-offset-4'>
        {renderErrors(errors)}
        <form action='/sessions' method='post'>
          <fieldset className='form-group row'>
            <label htmlFor='email' className='col-md-3'>Email</label>
            <div className='col-md-9'>
              <input
                type='email'
                id='email'
                name='email'
                value={user.get('email') || ''}
                className='form-control'
                onChange={updateUser}
              />
            </div>
          </fieldset>
          <fieldset className='form-group row'>
            <label htmlFor='password' className='col-md-3'>Password</label>
            <div className='col-md-9'>
              <input
                type='password'
                id='password'
                name='password'
                className='form-control'
                value={user.get('password') || ''}
                onChange={updateUser}
              />
            </div>
          </fieldset>
          <div className='text-xs-center'>
            <div className='btn btn-primary' onClick={signIn(user.get('email'), user.get('password'))}>
              Sign In
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const renderErrors = (errors) => {
  if (!errors.size) { return false; }

  return (
    <div className='alert alert-danger'>
      {errors.join(', ')}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.get('user') }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser(event) {
      dispatch(updateUser(event.target.name, event.target.value))
    },

    signIn(email, password) {
      return () => { dispatch(signUserIn(email, password)) };
    }
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default wrapper;
