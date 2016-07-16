'use strict';

import React from 'react';
import { connect } from 'react-redux';
import DrillRow from './drill_row';

const DrillsTable = ({ drills, addDrill, removeDrill, updateDrill }) => {
  return (
    <table className='table table-hover drills-table'>
      <thead className='thead-inverse'>
        <tr className='text-xs-center'>
          <th>Drill Name</th>
          <th>Weight</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      {drills.map(([key, value]) => <DrillRow drill={value} key={key} removeDrill={removeDrill(key)} updateDrill={updateDrill(key)}/>)}
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
  return { drills: state.get('drills').entrySeq() };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDrill(event) {
      event.preventDefault();
      dispatch({ type: 'ADD_DRILL' });
    },

    removeDrill(id) {
      return () => { dispatch({ type: 'REMOVE_DRILL', id: id }) };
    },

    updateDrill(id) {
      return (event) => {
        let data = { [event.target.name]: event.target.value };
        dispatch({ type: 'UPDATE_DRILL', id, data });
      };
    }
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillsTable);

export default wrapper;
