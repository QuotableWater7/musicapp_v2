import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { createPractice } from '../actions/practice';

const PracticeList = ({ practices, createPractice }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-4'>
          <div className='btn btn-primary' onClick={createPractice}>
            New Practice
          </div>
        </div>
      </div>
      <div className='row margin-top-10'>
        <div className='col-md-8 col-md-offset-4'>
          <h5>Existing Practices</h5>
          {practices.entrySeq().map(renderPractice)}
        </div>
      </div>
    </div>
  );
};

const renderPractice = ([id, practice]) => {
  return (
    <div key={practice.get('id')}>
      {practice.get('name')}
    </div>
  );
};

const wrapper = connect(
  (state) => { return { practices: state.get('practices') }; },
  (dispatch) => {
    return {
      createPractice() {
        dispatch(createPractice({ name: '[edit]', total_time: 90 }));
      }
    };
  }
)(PracticeList);

export default wrapper;
