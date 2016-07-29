'use strict';

import React from 'react';
import { Link } from 'react-router';

const PracticeList = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-4'>
          <div className='btn btn-primary'>
            New Practice
          </div>
        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-8 col-md-offset-4'>
          <h5>Existing Practices</h5>
          ...
        </div>
      </div>
    </div>
  );
};

export default PracticeList;
