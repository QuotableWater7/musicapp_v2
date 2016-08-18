import { List } from 'immutable';
import React from 'react';
import { Link } from 'react-router';
import TotalTimeSelector from './total_time_selector';
import DrillsTable from './drills_table';

const Practice = ({ practice, children, updatePractice, savePractice }) => {
  if (!practice) { return null; }

  return (
    <div>
      <div className='row margin-top-10'>
        <div className='col-md-12 text-xs-center'>
          <input
            value={practice.get('name')}
            name='name'
            className='form-control'
            style={{ width: 150, margin: 'auto' }}
            onChange={updatePractice(practice.get('id'))}
            onBlur={savePractice.bind(null, practice.get('id'))}
          />
        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-8 col-md-offset-2'>
          {children}
        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-12 text-xs-center'>
          <Link to='/app/timer' className='btn btn-primary'>Begin!</Link>
        </div>
      </div>
    </div>
  );
}

export default Practice;
