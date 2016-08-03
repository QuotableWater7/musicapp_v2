import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { createPractice, deletePractice } from '../actions/practice';

const PracticeList = ({ practices, createPractice, deletePractice }) => {
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
          {practices.entrySeq().map(renderPractice.bind(null, deletePractice))}
        </div>
      </div>
    </div>
  );
};

const renderPractice = (deletePractice, [id, practice]) => {
  return (
    <div key={id}>
      <Link to={`/app/practice/${id}`}>{practice.get('name')}</Link>
      <i className='fa fa-remove' onClick={deletePractice(id)}/>
    </div>
  );
};

const wrapper = connect(
  (state) => { return { practices: state.get('practices') }; },
  (dispatch) => {
    return {
      createPractice() {
        dispatch(createPractice({ name: '[edit]', total_time: 90 }));
      },

      deletePractice(id) {
        return () => { dispatch(deletePractice(id)); };
      }
    };
  }
)(PracticeList);

export default wrapper;
