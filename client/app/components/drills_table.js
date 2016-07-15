'use strict';

import React from 'react';
import { connect } from 'react-redux';
import DrillRow from './drill_row';

const DrillsTable = ({ drills, addDrill, removeDrill }) => {
  return (
    <table className='table table-hover drills-table'>
      <thead className='thead-inverse'>
        <tr>
          <th>Drill Name</th>
          <th>Importance</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      {drills.map((drill) => <DrillRow {...drill} removeDrill={removeDrill(drill.id)}/>)}
      <tbody>
        <tr className='add-drill-row'>
          <td colSpan='4' className='text-xs-center'>
            <a href='#' onClick={addDrill}>Add Drill</a>
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
    addDrill(event) {
      event.preventDefault();
      dispatch({ type: 'ADD_DRILL' });
    },

    removeDrill(id) {
      return () => { dispatch({ type: 'REMOVE_DRILL', id: id }) };
    }
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillsTable);

export default wrapper;
