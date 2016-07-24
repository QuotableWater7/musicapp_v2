'use strict';

import React from 'react';

export default () => {
  return (
    <div className='row'>
      <div className='col-md-4 col-md-offset-4'>
        <form action='/sessions' method='post'>
          <fieldset className='form-group row'>
            <label htmlFor='email' className='col-md-3'>Email</label>
            <div className='col-md-9'>
              <input type='email' id='email' className='form-control'/>
            </div>
          </fieldset>
          <fieldset className='form-group row'>
            <label htmlFor='password' className='col-md-3'>Password</label>
            <div className='col-md-9'>
              <input type='password' id='password' className='form-control'/>
            </div>
          </fieldset>
          <div className='text-xs-center'>
            <div className='btn btn-primary'>Sign In</div>
          </div>
        </form>
      </div>
    </div>
  );
}
