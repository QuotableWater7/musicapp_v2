import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { createPractice, deletePractice } from '../actions/practice';

const PracticeList = ({ practices, createPractice, deletePractice }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12 text-xs-center'>
          <div className='btn btn-primary' onClick={createPractice}>
            New Practice
          </div>
        </div>
      </div>
      <div className='row margin-top-10'>
        <table className='table table-striped practice-table'>
          {practices.entrySeq().map(renderPractice.bind(null, deletePractice))}
        </table>
      </div>
    </div>
  );
};

const renderPractice = (deletePractice, [id, practice]) => {
  return (
    <tbody key={id}>
      <tr>
        <td>
          <Link to={`/app/practice/${id}`}>{practice.get('name')}</Link>
        </td>
        <td>
          <i className='fa fa-remove' onClick={deletePractice(id)}/>
        </td>
      </tr>
    </tbody>
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
