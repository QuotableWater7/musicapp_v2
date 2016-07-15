'use strict';

import React from 'react';
import { connect } from 'react-redux';
import DrillRow from './drill_row';

const DrillsTable = ({ drills, addDrill }) => {
  return (
    <table className='table'>
      <thead className='thead-inverse'>
        <tr>
          <th>Drill Name</th>
          <th>Importance</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      {drills.map((drill) => <DrillRow {...drill} key={drill.id}/>)}
      <tbody>
        <tr>
          <td className='text-center' colSpan='2'>
            <div className='btn btn-primary' onClick={addDrill}>+</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDrill() { dispatch({ type: 'ADD_DRILL' }); }
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillsTable);

export default wrapper;
