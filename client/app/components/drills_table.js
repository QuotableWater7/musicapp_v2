import React from 'react';
import { connect } from 'react-redux';

import DrillRow from './drill_row';
import decorateDrills from '../selectors/drills';

import { createDrill } from '../actions/drill';

const DrillsTable = ({ drills, addDrill, removeDrill, updateDrill, resetDrillWeights, practice_id }) => {

  return (
    <table className='table table-hover drills-table'>
      <thead className='thead-inverse no-select'>
        <tr>
          <th style={{ width: '30%' }}>Drill Name</th>
          <th style={{ width: '40%' }}>
            Weight
            &nbsp;
            <a href='#' onClick={resetDrillWeights} style={{ 'fontWeight': 'normal' }}>
              (reset all)
            </a>
          </th>
          <th style={{ width: '20%' }}>Min</th>
          <th style={{ width: '20%' }}></th>
        </tr>
      </thead>
      {drills.map(([key, value]) => <DrillRow drill={value} key={key} removeDrill={removeDrill(key)} updateDrill={updateDrill(key)}/>)}
      <tbody>
        <tr className='add-drill-row'>
          <td colSpan='4' className='text-xs-center no-select'>
            <a href='#' onClick={addDrill(practice_id)}>Add Drill</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = () => { return {}; };

const mapDispatchToProps = (dispatch) => {
  return {
    addDrill(practice_id) {
      return (event) => {
        event.preventDefault();
        dispatch(createDrill(practice_id));
      }
    },

    removeDrill(id) {
      return () => { dispatch({ type: 'REMOVE_DRILL', id: id }) };
    },

    updateDrill(id) {
      return (event) => {
        let data = { [event.target.name]: event.target.value };
        dispatch({ type: 'UPDATE_DRILL', id, data });
      };
    },

    resetDrillWeights(event) {
      event.preventDefault();
      dispatch({ type: 'RESET_DRILL_WEIGHTS' });
    }
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillsTable);

export default wrapper;
