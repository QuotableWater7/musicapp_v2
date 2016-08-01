import { List } from 'immutable';
import React from 'react';
import { Link } from 'react-router';
import TotalTimeSelector from './total_time_selector';
import DrillsTable from './drills_table';

const Practice = ({ practice }) => {

  return (
    <div>
      <div className='row margin-top-10'>
        <div className='col-md-12 text-xs-center'>

        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-8 col-md-offset-2'>

        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-12 text-xs-center'>
          <Link to='/timer' className='btn btn-primary'>Begin!</Link>
        </div>
      </div>
    </div>
  );
}

export default Practice;
